import Ember from 'ember';

export default Ember.Component.extend({
    tagName: '',


    actions: {
        deleteTrack() {
            let track = this.get('track');
            this.get('deleteAction')(track);
        }
    }
});
