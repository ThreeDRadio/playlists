from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect, Http404, HttpResponseNotFound
from django.template import RequestContext, loader
from django.forms.models import modelformset_factory
from .forms import NewPlaylistForm, EditPlaylistForm, PlaylistEntryForm
from .models import Playlist, PlaylistEntry, Cd, Cdtrack
from django.contrib import messages
import django_filters
from rest_framework import filters
from rest_framework import viewsets, status
from rest_framework.decorators import detail_route, list_route
from rest_framework.response import Response
from rest_framework.views import APIView
from serializers import ReleaseSerializer, TrackSerializer
from django.shortcuts import get_object_or_404
# Create your views here.

def index(request):
    playlists = Playlist.objects.all()
    context = RequestContext(request, {
        'playlists': playlists 
        })
    return render(request, 'playlist/index.html', context)


def new(request):
    if request.method == 'POST':
        form = NewPlaylistForm(request.POST)
        if form.is_valid():
            showName = form.cleaned_data['showName'];
            host = form.cleaned_data['host'];
            date = form.cleaned_data['date'];
            
            playlist = Playlist()
            playlist.show = showName
            playlist.date = date
            playlist.host = host

            playlist.save()

            return HttpResponseRedirect('/logger/' + str(playlist.id) + '/edit/')

        else:
            return HttpResponseRedirect('/logger/')
    else:
        form = NewPlaylistForm()
        context = RequestContext(request, {
            'form': form
        })
        return render(request, 'playlist/new.html', context)

    return HttpResponse("new form")

def show(request, playlist_id):
    playlist = get_object_or_404(Playlist, pk=playlist_id)

    tracks = PlaylistEntry.objects.filter(playlist_id=playlist.pk).values()

    context = RequestContext(request, {
            'playlist' : playlist,
            'tracks' : tracks,
            })

    if request.method == 'GET':
        if request.GET.get('format') == 'text':
            return render(request, 'playlist/textview.html', context)
    return render(request, 'playlist/view.html', context)

def edit(request, playlist_id):
    playlist = Playlist.objects.get(pk=playlist_id)

    tracks = PlaylistEntry.objects.filter(playlist_id=playlist.pk).values()
    EntryFormSet = modelformset_factory(PlaylistEntry, extra=60, form=PlaylistEntryForm)
    formset = EntryFormSet(queryset=PlaylistEntry.objects.filter(playlist=playlist))

    if request.method == 'POST':
        formset = EntryFormSet(request.POST)
        playlistEntries = formset.save(commit=False)
        for entry in playlistEntries:
            entry.playlist = playlist
            entry.save()

        formset = EntryFormSet(queryset=PlaylistEntry.objects.filter(playlist=playlist))
        messages.success(request, 'Playlist saved.')

    context = RequestContext(request, {
            'playlist' : playlist,
            'formset' : formset,
            })

    return render(request, 'playlist/edit.html', context)


###############

class ReleaseViewSet(viewsets.ModelViewSet):
    queryset = Cd.objects.all()
    serializer_class = ReleaseSerializer
    filter_backends = (filters.OrderingFilter,
                       filters.SearchFilter,)
    search_fields = ('artist','title','tracks__title')
    ordering_fields = ('arrivaldate', 'artist', 'title')

    @list_route()
    def latest(self, request):
        latestReleases = Release.objects.all().order_by('-arrivaldate')
        
        page = self.paginate_queryset(latestReleases)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(latestReleases, many=True)
        return Response(serializer.data)

class TrackViewSet(viewsets.ModelViewSet):
    queryset = Cdtrack.objects.all()
    serializer_class = TrackSerializer
    filter_backends = (filters.OrderingFilter,
                        filters.DjangoFilterBackend)

    filter_fields = ('album__artist','tracktitle')
    

class ArtistViewSet(viewsets.ViewSet):

    filter_backends = (filters.SearchFilter,)
    search_fields = ('artist',)

    def list(self, request):
        searchParam = self.request.query_params.get('term')
        if searchParam is None:
            artists = [release.artist for release in Cd.objects.distinct('artist').order_by('artist')]
        else:
            artists = [release.artist for release in Cd.objects.distinct('artist').filter(artist__icontains = searchParam).order_by('artist')]

        return Response(artists)
