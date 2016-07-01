import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    releaseSelected(release) {
      this.get('releaseSelected')(release);
    }
  }
});
