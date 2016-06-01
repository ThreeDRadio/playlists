import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('logger', function() {
    this.route('index', {path: '/'} );
    this.route('playlist');
  });
});

export default Router;
