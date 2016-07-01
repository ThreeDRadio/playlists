import Ember from 'ember';

export default Ember.Controller.extend({

  page: 1,
  artistIn: '',
  trackIn: '',
  albumIn: '',
  countryIn: '',
  yearIn: '',

  artist: '',
  track: '',
  album: '',
  country: '',
  year: '',

  local: '',
  female: '',
  demo: '',
  compilation: '',

  isFirstPage: function() {
    return this.get('model').meta.previous == null;
  },
  isLastPage: function() {
    return this.get('model').meta.next == null;
  },

  actions: {
    gotoRelease(release) {
      this.transitionToRoute('catalogue.release', release);
    },
    search(params) {
      this.set('artist', '');
      this.set('track', '');
      this.set('album', '');
      this.set('country', '');
      this.set('year', '');

      this.set('local', '');
      this.set('female', '');
      this.set('compilation', '');
      this.set('demo', '');

      let searchParams = {};
      if (this.get('artistIn').length > 0)
        searchParams.artist= this.get('artistIn');
        
      if (this.get('trackIn').length > 0)
        searchParams.track= this.get('trackIn');

      if (this.get('albumIn').length > 0)
        searchParams.release= this.get('albumIn');

      if (this.get('countryIn').length > 0)
        searchParams.country= this.get('countryIn');

      if (this.get('yearIn').length > 0)
        searchParams.year= this.get('yearIn');


      if (this.get('localIn'))
        searchParams.local = 2;
      if (this.get('femaleIn'))
        searchParams.female = 2;
      if (this.get('demoIn'))
        searchParams.demo = 2;
      if (this.get('compilationIn'))
        searchParams.compilation = 2;

      console.log(searchParams);
      this.transitionToRoute({queryParams: searchParams});
    }
  }
});

