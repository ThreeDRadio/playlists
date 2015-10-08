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
import csv
# Create your views here.

def index(request):
    playlists = Playlist.objects.order_by('-pk')
    if request.GET.get('saved') == 'true':
        messages.success(request, 'Playlist Submitted.')
    context = RequestContext(request, {
        'playlists': playlists 
        })
    return render(request, 'playlist/index.html', context)


def summary(request):
    playlists = Playlist.objects.all();
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="play_summary.csv"'

    out = csv.writer(response)
    out.writerow(['show','date','artist','track','album','local','australian','female','new release'])

    for playlist in playlists:
        for track in playlist.playlistentry_set.all():
            out.writerow([playlist.show,playlist.date,track.artist,track.title,track.album,track.local,track.australian,track.female,track.newRelease])

    return response


def new(request):
    if request.method == 'POST':
        form = NewPlaylistForm(request.POST)
        if form.is_valid():
            showName = form.cleaned_data['showName'];
            host = form.cleaned_data['host'];
            date = form.cleaned_data['date'];
            notes = form.cleaned_data['notes'];
            
            playlist = Playlist()
            playlist.show = showName
            playlist.date = date
            playlist.host = host
            playlist.notes = notes 

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

    tracks = PlaylistEntry.objects.filter(playlist_id=playlist.pk).order_by("pk").values()

    context = RequestContext(request, {
            'playlist' : playlist,
            'tracks' : tracks,
            })

    if request.method == 'GET':
        if request.GET.get('format') == 'text':
            response = render(request, 'playlist/textview.html', context)
            response['Content-Type'] = 'text/plain'
            return response


        elif request.GET.get('format') == 'csv':
            response = HttpResponse(content_type='text/csv')
            response['Content-Disposition'] = 'attachment; filename="' + playlist.show + '-' + playlist.date.isoformat() + '.csv"'

            out = csv.writer(response)
            out.writerow(['artist','track','album','local','australian','female','new release'])

            for track in playlist.playlistentry_set.all():
                out.writerow([track.artist,track.title,track.album,track.local,track.australian,track.female,track.newRelease])
            return response
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

        if request.POST.get('final') :
            playlist.complete = True
            playlist.save()
            return HttpResponseRedirect('/logger/?saved=true')

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



class TrackFilter(django_filters.FilterSet):
    artist = django_filters.CharFilter(name="album__artist", lookup_type='icontains')
    track  = django_filters.CharFilter(name="tracktitle", lookup_type='icontains')
    class Meta:
        model = Cdtrack
        fields = ['track','artist']

class TrackViewSet(viewsets.ModelViewSet):
    queryset = Cdtrack.objects.all()
    serializer_class = TrackSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filter_class = TrackFilter
    

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
