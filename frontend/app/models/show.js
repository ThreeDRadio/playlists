import Model from 'ember-data/model';
import {asMany} from 'ember-data/relationships';

export default Model.extend({

    name: attr('string'),
    defaultHost: attr('string'),
    startTime: attr('string'),
    endTime: attr('string'),
    playlists: hasMany('playlist')
});
