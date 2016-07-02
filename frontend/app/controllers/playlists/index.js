import Ember from 'ember';
import groupBy from 'ember-group-by';

export default Ember.Controller.extend({
  queryParams: ['ordering', 'page'],
  page: 1,
  ordering: '-date',

  playlistsByDate: groupBy('model', 'date'),

  isFirstPage: function() {
    return this.model.meta.previous == null;
  },

  isLastPage: function() {
    return this.get('model').meta.next == null;
  }
});
