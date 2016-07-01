import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    gotoRelease(release) {
      console.log(release);
      this.transitionToRoute('catalogue.release', release);
    }
  }
});
