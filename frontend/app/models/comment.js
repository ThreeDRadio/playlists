import Model from 'ember-data/model';
import {belongsTo, hasMany} from 'ember-data/relationships';
import attr from 'ember-data/attr';

export default Model.extend({

  comment: attr('string'),
  release: belongsTo('release')
  
});
