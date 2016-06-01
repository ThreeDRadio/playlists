import Model from 'ember-data/model';
import {belongsTo, hasMany} from 'ember-data/relationships';


export default Model.extend({

    show: belongsTo('show'),
    host: attr('string'),
    date: attr('date'),
    notes: attr('string'),
    complete: attr('boolean'),
    tracks: hasMany('playlistentry')
  
});
