from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect, Http404, HttpResponseNotFound
from django.template import RequestContext, loader
from django.forms.models import modelformset_factory
from .forms import NewPlaylistForm, EditPlaylistForm, PlaylistEntryForm
from .models import Playlist, PlaylistEntry
from django.contrib import messages
# Create your views here.

def index(request):
    form = NewPlaylistForm()
    context = RequestContext(request, {
        'form': form
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

            return HttpResponseRedirect('/logger/' + str(playlist.id) + '/')

        else:
            return HttpResponseRedirect('/logger/')





    return HttpResponse("new form")

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
        messages.success(request, 'Playlist saved.')

    context = RequestContext(request, {
            'playlist' : playlist,
            'formset' : formset,
            })

    return render(request, 'playlist/edit.html', context)
