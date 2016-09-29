import Model from 'ember-data/model';
import {belongsTo} from 'ember-data/relationships';
import attr from 'ember-data/attr';

export default Model.extend({
  
  tracknum: attr('number'),
  tracktitle: attr('string'),
  trackartist: attr('string'),
  tracklength: attr('number'),

  release: belongsTo('release')

});
