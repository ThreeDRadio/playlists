import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: {
    page: {
      refreshModel: true
    },
    search: {
      refreshModel: true
    }
  }, 
  page: null,
  search: null,

  actions: {
    gotoRelease(release) {
      this.transitionToRoute('catalogue.release', release);
    },
    quickSearch(params) {
      this.transitionToRoute({queryParams: {search: this.get('searchQuery')}});
    }
  }
});
