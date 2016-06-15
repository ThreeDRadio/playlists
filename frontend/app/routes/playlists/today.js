import Ember from 'ember';
import ENV from '../../config/environment';

export default Ember.Route.extend({
  model: function() {
    return Ember.$.getJSON(ENV.APP.API_HOST + "/api/playlistentries/today/");
  }
});
