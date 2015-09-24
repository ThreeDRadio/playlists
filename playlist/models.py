from django.db import models

# Create your models here.



class Cd(models.Model):
    id = models.BigIntegerField(primary_key=True)
    artist = models.CharField(max_length=200, blank=True, null=True)
    title = models.CharField(max_length=200, blank=True, null=True)
    year = models.SmallIntegerField(blank=True, null=True)
    genre = models.CharField(max_length=50, blank=True, null=True)
    company = models.CharField(max_length=100, blank=True, null=True)
    cpa = models.CharField(max_length=100, blank=True, null=True)
    arrivaldate = models.DateField(blank=True, null=True)
    copies = models.SmallIntegerField(blank=True, null=True)
    compilation = models.SmallIntegerField(blank=True, null=True)
    demo = models.SmallIntegerField(blank=True, null=True)
    local = models.SmallIntegerField(blank=True, null=True)
    female = models.SmallIntegerField(blank=True, null=True)
    createwho = models.BigIntegerField(blank=True, null=True)
    createwhen = models.BigIntegerField(blank=True, null=True)
    modifywho = models.BigIntegerField(blank=True, null=True)
    modifywhen = models.BigIntegerField(blank=True, null=True)
    comment = models.TextField(blank=True, null=True)
    status = models.SmallIntegerField(blank=True, null=True)
    format = models.SmallIntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'cd'


class Cdcomment(models.Model):
    cdid = models.BigIntegerField()
    cdtrackid = models.BigIntegerField()
    comment = models.TextField(blank=True, null=True)
    createwho = models.BigIntegerField()
    createwhen = models.BigIntegerField()
    modifywho = models.BigIntegerField()
    modifywhen = models.BigIntegerField()

    class Meta:
        managed = False
        db_table = 'cdcomment'


class Cdtrack(models.Model):
    trackid = models.BigIntegerField(primary_key=True)
    cdid = models.BigIntegerField()
    tracknum = models.BigIntegerField()
    tracktitle = models.CharField(max_length=200, blank=True, null=True)
    trackartist = models.CharField(max_length=200, blank=True, null=True)
    tracklength = models.BigIntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'cdtrack'

class Playlist(models.Model):
    show = models.CharField(max_length=200)
    host = models.CharField(max_length=200)
    date = models.DateField()
    complete = models.BooleanField(default=False)

class PlaylistEntry(models.Model):
    playlist = models.ForeignKey(Playlist)
    # text entry
    artist = models.CharField(max_length=200, blank=True, null=True)
    album = models.CharField(max_length=200, blank=True, null=True)
    title = models.CharField(max_length=200, blank=True, null=True)
    duration = models.DurationField(blank=True);

    #quotas
    local = models.BooleanField()
    female = models.BooleanField()
    newRelease = models.BooleanField()
    
    #found in catalogue
    catalogueEntry = models.ForeignKey(Cdtrack, null=True)
