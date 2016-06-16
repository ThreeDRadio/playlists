import Model from 'ember-data/model';
import {belongsTo} from 'ember-data/relationships';
import attr from 'ember-data/attr';

export default Model.extend({

  playlist: belongsTo('playlist'),

  index: attr('number'),

  artist: attr('string'),
  album: attr('string'),
  title: attr('string'),
  duration: attr('string'),
  
  local: attr('boolean'),
  australian: attr('boolean'),
  female: attr('boolean'),
  newRelease: attr('boolean'),
});
