import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import Ember from 'ember';

export default Model.extend({

  username: attr('string'),
  firstName: attr('string'),
  lastName: attr('string'),
  email: attr('string'),

  fullName: Ember.computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  })

});
