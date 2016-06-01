import Model from 'ember-data/model';
import {belongsTo, hasMany} from 'ember-data/relationships';
import attr from 'ember-data/attr';


export default Model.extend({

    show: belongsTo('show'),
    showname: attr('string'),
    host: attr('string'),
    date: attr('string'),
    notes: attr('string'),
    complete: attr('boolean'),
    tracks: hasMany('playlistentry')
  
});
