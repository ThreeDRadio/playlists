import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    }
  }, 

  model() {
    let now = new Date();
    let twoMonthsAgo = new Date(now.getFullYear(), 
                                now.getMonth() - 2, 
                                now.getDate());
    console.log(twoMonthsAgo);
    return this.store.query('release', {ordering: '-arrivaldate,artist,title', min_arrival: moment(twoMonthsAgo).format('YYYY-MM-DD')});
  }
});
