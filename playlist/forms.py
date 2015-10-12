from django import forms
from datetimewidget.widgets import DateWidget
from django.forms import ModelForm
from django.forms.widgets import TextInput, CheckboxInput, Textarea, TimeInput
import datetime
from .models import PlaylistEntry


class ShortDurationField(forms.DurationField):
    def prepare_value(self, value):
        if isinstance(value, datetime.timedelta):
            seconds = value.total_seconds()
    
            hours = int(seconds // (60*60))
            minutes = int((seconds- hours*60*60) // 60)
            second = int(seconds % 60)
            if hours > 0:
                return {'0'}.format(hours,minute,second)

            return '{:01d}:{:02d}'.format(minutes,second)
        else:
            # In case something went wrong
            return super(forms.DurationField, self).prepare_value(value)


class NewPlaylistForm(forms.Form):
    showName = forms.CharField(label="Show Name", max_length="200")
    host = forms.CharField(label="Hosts", max_length="200")
    date = forms.DateField(label="Date", widget = DateWidget(usel10n=True, bootstrap_version=3))
    notes = forms.CharField(widget = Textarea)

class EditPlaylistForm(forms.Form):
    pass


class PlaylistEntryForm(forms.ModelForm):
    duration = ShortDurationField(widget=TextInput(attrs={'placeholder': 'mm:ss', 'class':"form-control input-sm", 'style':'width: 60px;'}),)
    class Meta:
        model = PlaylistEntry
        exclude = {'playlist', 'catalogueEntry'}
        widgets = {
            'artist': TextInput(attrs={'placeholder': 'Artist', 'class':"form-control input-sm typeahead-artist"}),
            'title': TextInput(attrs={'placeholder': 'Track', 'class':"form-control input-sm typeahead-track"}),
            'album': TextInput(attrs={'placeholder': 'Album', 'class':"form-control input-sm"}),
            'local': CheckboxInput(attrs={'class':"local_check",}),
            'australian': CheckboxInput(attrs={'class':"australian_check",}),
            'female': CheckboxInput(attrs={'class':"female_check",}),
        }
