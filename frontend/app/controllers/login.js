import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  actions: {
    authenticate() {

      let {username, password } = this.getProperties('username', 'password');
      this.get('session').authenticate('authenticator:django-rest', {identification:username, password:password}).then(() => {
        this.transitionToRoute('index');
      }).catch((reason) => {
        this.set('errors', reason);
        this.set('username', '');
        this.set('password', '');
      });
    }
  }
});
