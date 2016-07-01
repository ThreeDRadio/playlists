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

  model(params) {
    if (Ember.isPresent(params.search)) {
      console.log("search");
      let queryParams = {
        ordering: 'artist',         
        search: params.search,
        page: params.page
      };
      return this.store.query('release', queryParams);
    }
  },

  actions: {
    quickSearch(params) {
      console.log("Searching: " + params);
      this.transitionTo({queryParams: {search: params}});
    }
  }
});
