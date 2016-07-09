import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    },
    artist: {
      refreshModel: true
    },
    track: {
      refreshModel: true
    },
    release: {
      refreshModel: true
    },
    country: {
      refreshModel: true
    },
    year: {
      refreshModel: true
    },
    local: {
      refreshModel: true
    },
    demo: {
      refreshModel: true
    },
    compilation: {
      refreshModel: true
    },
    female: {
      refreshModel: true
    },
  }, 

  afterModel() {
    window.scrollTo(0,0);
  },

  search: '',
  page: 1,

  model(params) {
    console.log(params);
    this.controllerFor('catalogue.advanced-search').set('artistIn', params.artist);
    this.controllerFor('catalogue.advanced-search').set('titleIn', params.track);
    this.controllerFor('catalogue.advanced-search').set('albumIn', params.release);
    this.controllerFor('catalogue.advanced-search').set('yearIn', params.year);
    this.controllerFor('catalogue.advanced-search').set('countryIn', params.country);
    this.controllerFor('catalogue.advanced-search').set('localIn', params.local !== '');
    this.controllerFor('catalogue.advanced-search').set('femaleIn', params.female!== '');
    this.controllerFor('catalogue.advanced-search').set('demoIn', params.demo!== '');
    this.controllerFor('catalogue.advanced-search').set('compilationIn', params.compilation !== '');

    params.ordering = 'artist';
    if (params.artist || params.track || params.release ||
        params.year || params.country || params.local ||
        params.female || params.compilation) {
      return this.store.query('release', params);
    }
    return null;
  },
  actions: {
    loading(transition, originRoute) {
      let controller = this.controllerFor('catalogue.advanced-search');
      controller.set('currentlyLoading', true);
      transition.promise.finally(function() {
        controller.set('currentlyLoading', false);
      });
    }
  },

});
