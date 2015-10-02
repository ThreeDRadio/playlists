from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^(?P<playlist_id>[0-9]+)/edit/$', views.edit, name='edit'),
    url(r'^(?P<playlist_id>[0-9]+)/$', views.show, name='show'),
    url(r'^new/$', views.new, name='new'),
    url(r'^summary/$', views.summary, name='summary'),
]

