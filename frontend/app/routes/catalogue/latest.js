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

    let queryParams = {
      ordering: '-arrivaldate,artist,title',         
      min_arrival: moment(twoMonthsAgo).format('YYYY-MM-DD'),
      page: params.page
    };

    return this.store.query('release', queryParams);
  },

});
