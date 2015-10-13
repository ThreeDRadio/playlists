from django.contrib import admin

from .models import Playlist, PlaylistEntry

# Register your models here.
class PlaylistEntryInline(admin.TabularInline):
    list_display = ['artist','title']
    exclude = ['catalogueEntry']
    model = PlaylistEntry 

class PlaylistEntryAdmin(admin.ModelAdmin):
    model = PlaylistEntry 
    exclude = ['catalogueEntry']

class PlaylistAdmin(admin.ModelAdmin):
    inlines = [PlaylistEntryInline]

admin.site.register(Playlist, PlaylistAdmin)
admin.site.register(PlaylistEntry, PlaylistEntryAdmin)
