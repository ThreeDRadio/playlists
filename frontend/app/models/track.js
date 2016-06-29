import Model from 'ember-data/model';
import {belongsTo, hasMany} from 'ember-data/relationships';
import attr from 'ember-data/attr';

export default Model.extend({
  
  title: attr('string'),
  artist: attr('string'),
  duration: attr('number'),

  release: belongsTo('release')

});