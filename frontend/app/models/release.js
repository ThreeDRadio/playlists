import Model from 'ember-data/model';
import {belongsTo, hasMany} from 'ember-data/relationships';
import attr from 'ember-data/attr';

export default Model.extend({

  artist: attr('string'),
  title: attr('string'),
  year: attr('number'),
  genre: attr('string'),
  company: attr('string'),
  country: attr('string'),
  arrivalDate: attr('date'),

  local: attr('boolean'),
  demo: attr('boolean'),
  female: attr('boolean'),
  compilation: attr('boolean'),

  owner: attr('string'),
  timestamp: attr('date'),

  tracks: hasMany('track', {inverse: 'release'})
  
});
