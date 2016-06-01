import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('logger', function() {
    this.route('index', {path: '/'} );
    this.route('playlists', {path: '/playlists/:playlist_id'});
  });
});

export default Router;
