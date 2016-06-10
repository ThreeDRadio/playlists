import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  actions: {
    authenticate() {

      let {username, password } = this.getProperties('username', 'password');
      this.get('session').authenticate('authenticator:django-rest', {identification:username, password:password}).catch((reason) => {
      console.log(reason);
        this.set('errorMessage', reason.non_field_errors);
        this.set('username', '');
        this.set('password', '');
      });
    }

  }
});
