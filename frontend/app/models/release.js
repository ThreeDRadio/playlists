import Model from 'ember-data/model';
import {belongsTo, hasMany} from 'ember-data/relationships';
import attr from 'ember-data/attr';

export default Model.extend({

  artist: attr('string'),
  title: attr('string'),
  year: attr('number'),
  genre: attr('string'),
  company: attr('string'),
  cpa: attr('string'),
  arrivaldate: attr('date'),

  local: attr('number'),
  demo: attr('number'),
  female: attr('number'),
  compilation: attr('number'),

  owner: attr('string'),
  timestamp: attr('date'),

  tracks: hasMany('track', {inverse: 'release'}),

  isLocal: Ember.computed('local', function() {
    if (this.get('local') == 1) {
      return false;
    }
    else if (this.get('local') == 2) {
      return 'Local';
    }
    else if (this.get('local') == 3) {
      return 'Some Local';
    }
  }),

  isFemale: Ember.computed('female', function() {
    if (this.get('female') == 1) {
      return false;
    }
    else if (this.get('female') == 2) {
      return 'Female';
    }
    else if (this.get('female') == 3) {
      return 'Some Female';
    }
  }),

  isCompilation: Ember.computed('compilation', function() {
    return this.get('compilation') != 1;
  })
  
});
