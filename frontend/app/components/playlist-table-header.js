import Ember from 'ember';

export default Ember.Component.extend({
    tagName: '',

    didInsertElement() {
        $('.floathead').floatThead({
            position: 'fixed'
        });
    }
});
