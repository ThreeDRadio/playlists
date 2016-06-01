import Model from 'ember-data/model';

export default Model.extend({

    name: attr('string'),
    defaultHost: attr('string'),
    startTime: attr('string'),
    endTime: attr('string'),
    playlists: hasMany('playlist')
});
