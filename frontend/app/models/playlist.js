import Model from 'ember-data/model';


export default Model.extend({

    show: belongsTo('show'),
    host: attr('string'),
    date: attr('date'),
    notes: attr('string'),
    complete: attr('boolean'),
    tracks: hasMany('playlistentry')
  
});
