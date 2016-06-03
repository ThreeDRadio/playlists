import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {
        createPlaylist(show, host, date, notes) {

            let record = this.store.createRecord('playlist', {
                show: show, 
                host: host,
                date: date,
                notes: notes,
                showname: '',
            });
            var self = this;
            record.save().then(function(savedVersion) {
                self.transitionToRoute('playlists.edit', savedVersion);
            });
        }
    }
});
