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
    this.controllerFor('catalogue.advanced-search').set('artist', params.artist);
    this.controllerFor('catalogue.advanced-search').set('title', params.track);
    this.controllerFor('catalogue.advanced-search').set('album', params.release);

    params.ordering = 'artist';
    return this.store.query('release', params);
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
