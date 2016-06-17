import ENV from 'frontend/config/environment';

export function initialize(/* application */) {
    // application.inject('route', 'foo', 'service:foo');
}

export default {
    name: 'auth',
    before: 'django-rest-auth',
    initialize: function(container, application) {
        window.ENV = ENV;
    }
};
