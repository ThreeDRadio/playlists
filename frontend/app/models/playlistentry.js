import Model from 'ember-data/model';
import {belongsTo} from 'ember-data/relationships';
import attr from 'ember-data/attr';

export default Model.extend({

  playlist: belongsTo('playlist'),

  index: attr('number'),

  artist: attr('string'),
  album: attr('string'),
  title: attr('string'),
  duration: attr('string', {defaultValue: "0:00"}),
  
  local: attr('boolean', {defaultValue: false}),
  australian: attr('boolean', {defaultValue: false}),
  female: attr('boolean', {defaultValue: false}),
  newRelease: attr('boolean', {defaultValue: false}),
});
