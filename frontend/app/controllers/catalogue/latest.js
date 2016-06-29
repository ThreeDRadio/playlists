import Ember from 'ember';

export default Ember.Controller.extend({
    sortProperties: ['arrivaldate'],
    sortAscending: false,

    queryParams: [
        'page',
    ],

    page: 1,

    nextPage: function() {
        return this.get('page') + 1;
    }.property('page'),

    prevPage: function() {
        return this.get('page') - 1;
    }.property('page'),

    isFirstPage: function() {
        return this.get('page') === 1;
    }.property('page'),

});
