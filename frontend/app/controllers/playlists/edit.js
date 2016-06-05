import Ember from 'ember';

export default Ember.Controller.extend({

    isValidTime(v) {
        if (v === "") {
            return true;
        }
        return true;
    },

    actions: {
        submitTrack() {
            let artist = this.getWithDefault('artist', "").trim();
            let track  = this.getWithDefault('track', "").trim();
            let album  = this.getWithDefault('album', "").trim();
            let duration = this.getWithDefault('duration', "").trim();

            if (artist.length > 0 && track.length > 0 && album.length > 0 && this.isValidTime(duration)) {
                let entry = this.store.createRecord('playlistentry', {
                    artist: artist,
                    title: track,
                    album: album,
                    duration: duration, 
                    local: this.getWithDefault('local', false),
                    australian: this.getWithDefault('australian', false),
                    female: this.getWithDefault('female', false),
                    newRelease: this.getWithDefault('newRelease', false),
                    playlist: this.model
                    });
                    entry.save().then( function() {
                        window.scrollTo(0, document.body.scrollHeight);
                        Ember.$("#new-track-artist-field").focus();
                    });
                this.setProperties({artist: '', track: '', album: '', duration: '', local: false, australian: false, female: false, newRelease: false});
                
            }
            else {

            }
        }
    }
});
