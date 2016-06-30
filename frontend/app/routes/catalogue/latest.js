import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    }
  }, 

  model(params) {
    let now = new Date();
    let twoMonthsAgo = new Date(now.getFullYear(), 
                                now.getMonth() - 2, 
                                now.getDate());

    return this.store.query('release', {ordering: '-arrivaldate,artist,title', min_arrival: moment(twoMonthsAgo).format('YYYY-MM-DD')});
  },

  actions: {
    gotoRelease(release) {
      console.log(release);
      this.transitionTo('catalogue.release', release);
    }
  }
});
