import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';
import ENV from 'frontend/config/environment';

export default Base.extend({
    restore(data) {
    },

    authenticate(username, password) {

        var data = {
            'username': username,
            'password': password
            };
        return new Ember.RSVP.Promise(function(resolve, reject) {
            Ember.$.post(ENV.APP.API_HOST + "/api-token-auth/", data, resolve, null, 'json').fail(reject)
            });
    },

    invalidate(data) {
    }
});
