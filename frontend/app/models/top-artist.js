import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({

    artist: attr('string'),
    plays: attr('number'),
  
});
