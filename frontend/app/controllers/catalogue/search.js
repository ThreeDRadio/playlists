import Ember from 'ember';

export default Ember.Controller.extend({

  page: 1,
  search: '',

  isFirstPage: function() {
    return this.get('model').meta.previous == null;
  },
  isLastPage: function() {
    return this.get('model').meta.next == null;
  },

  actions: {
    gotoRelease(release) {
      this.transitionToRoute('catalogue.release', release);
    },
    quickSearch() {
      this.transitionToRoute({queryParams: {search: this.get('searchQuery')}});
    }
  }
});
