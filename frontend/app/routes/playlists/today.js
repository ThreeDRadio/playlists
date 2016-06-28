import Ember from 'ember';
import ENV from '../../config/environment';

export default Ember.Route.extend({

  session: Ember.inject.service(),

  model() {
    let sesh = this.get('session');
    sesh.authorize('authorizer:django-rest', (headerName, headerValue) => {
      return Ember.$.getJSON({
        url: ENV.APP.API_HOST + "/api/playlistentries/today/",
        beforeSend: function(xhr) {
          xhr.setRequestHeader(headerName, headerValue);
        },
      });
    });
  }
});
