import Ember from 'ember';

export default Ember.Component.extend({
    tagName: '',
    editMode: false,


    actions: {
        deleteTrack() {
            let track = this.get('track');
            this.get('deleteAction')(track);
        },


        editTrack() {
            this.set('editMode', true);
        },

        updateTrack() {
            let track = this.get('track');
            track.save();
            this.set('editMode', false);
        }
    }
});
