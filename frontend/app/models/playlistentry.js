import Model from 'ember-data/model';
import {belongsTo} from 'ember-data/relationships';

export default Model.extend({

  playlist: belongsTo('playlist'),
  artist: attr('string'),
  album: attr('string'),
  title: attr('string'),
  duration: attr('string'),
  
  local: attr('boolean'),
  australian: attr('boolean'),
  female: attr('boolean'),
  newRelease: attr('boolean'),
});
