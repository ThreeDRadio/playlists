import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({

    username: attr('string'),
    firstName: attr('string'),
    lastName: attr('string'),
    email: attr('string'),
  
});
