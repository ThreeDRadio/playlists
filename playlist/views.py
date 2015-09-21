from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.template import RequestContext, loader

from .forms import NewPlaylistForm 
from .models import Playlist
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
            date = form.cleaned_data['date'];
            
            playlist = Playlist()
            playlist.show = showName
            playlist.date = date

            playlist.save()

            return HttpResponseRedirect('/logger/' + str(playlist.id) + '/')

        else:
            return HttpResponseRedirect('/logger/')





    return HttpResponse("new form")

def edit(request, playlist_id):
    return HttpResponse("edit form")
