import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    },
    search: {
      refreshModel: true
    }
  }, 

  afterModel() {
    window.scrollTo(0,0);
  },

  search: '',
  page: 1,

  model(params) {
    this.controllerFor('catalogue.search').set('searchQuery', params.search);
    if (Ember.isPresent(params.search)) {
      let queryParams = {
        ordering: 'artist',         
        search: params.search,
      };
      if (Ember.isPresent(params.page)) {
        queryParams.page = params.page;
      }
      return this.store.query('release', queryParams);
    }
    else {
      return null;
    }
  },
  actions: {
    loading(transition) {
      let controller = this.controllerFor('catalogue.search');
      controller.set('currentlyLoading', true);
      transition.promise.finally(function() {
        controller.set('currentlyLoading', false);
      });
    }
  },

});
