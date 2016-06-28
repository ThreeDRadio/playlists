import Ember from 'ember';

export default Ember.Component.extend({
  size: 200,
  email: 'asdf',
  class: '',

  gravatarUrl: Ember.computed('email', 'size', function() {
    let email = this.get('email').toLowerCase();
    let size = this.get('size');

    return '//www.gravatar.com/avatar/' + md5(email) + '?s=' + size + "&d=retro";
  })
});
