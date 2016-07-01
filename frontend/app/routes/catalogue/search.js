import Ember from 'ember';

export default Ember.Route.extend({

  searchQuery: '',

  model(params) {
    if (Ember.isPresent(params.search)) {
      let queryParams = {
        ordering: 'artist',         
        search: params.search,
      };
      if (Ember.isPresent(params.page)) {
        queryParams.page = params.page
      }
      return this.store.query('release', queryParams);
    }
  },

});
