import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service(),

    actions: {
        authenticate() {

            let {username, password } = this.getProperties('username', 'password');
            console.log(username);
            console.log(password);
            this.get('session').authenticate('authenticator:django-rest', {identification:username, password:password}).catch((reason) => {
                this.set('errorMessage', reason);
            });
        }

    }
});
