import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Component.extend({

  session: Ember.inject.service(),

  actions: {
    download() {
      let url = ENV.APP.API_HOST + '/api/tracks/' + this.get('track').get('id') + '/requestDownload/'

      this.get('session').authorize('authorizer:django-rest', (headerName, headerValue) => {
        const headers = {};
        headers[headerName] = headerValue;
        Ember.$.ajax(url, { headers })
        .then( (response) => {
          window.open($.parseJSON(response).url);
        });
      });
    }
  }
});
