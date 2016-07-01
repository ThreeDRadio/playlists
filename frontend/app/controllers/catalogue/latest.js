import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['arrivaldate'],
  sortAscending: false,

  queryParams: [
    'page',
  ],

  page: 1,

  isFirstPage: function() {
    return this.get('model').meta.previous == null;
  }
  isLastPage: function() {
    return this.get('model').meta.next == null;
  }


  actions: {
    gotoRelease(release) {
      console.log(release);
      this.transitionToRoute('catalogue.release', release);
    }
  }
});
