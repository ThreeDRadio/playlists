import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.query('playlist', {page: params.page, ordering: params.ordering});
    },

    queryParams: {
        page: {
            refreshModel: true
        }
    }
});
