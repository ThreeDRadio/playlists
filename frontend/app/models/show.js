import Model from 'ember-data/model';
import attr from 'ember-data/attr';

import {hasMany} from 'ember-data/relationships';

export default Model.extend({

    name: attr('string'),
    defaultHost: attr('string'),
    startTime: attr('string'),
    endTime: attr('string'),
    notes: attr('string'),
    playlists: hasMany('playlist'),
    topartists: hasMany('topArtist'),
    statistics: hasMany('statistic')
});
