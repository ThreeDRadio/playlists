import Ember from 'ember';

export default Ember.Controller.extend({

  isValidTime(v) {
    if (v === "") {
      return false;
    }
    return /^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)$/.test(v);
  },


  getNextIndex() {
    return this.get('model.tracks').get('length') + 1;
  },


  actions: {
    submitTrack() {
      let artist = this.getWithDefault('artist', "").trim();
      let track  = this.getWithDefault('track', "").trim();
      let album  = this.getWithDefault('album', "").trim();
      let duration = this.getWithDefault('duration', "").trim();
      let index = this.getNextIndex();

      if (!this.isValidTime(duration)) {
        duration = "0:00";
      }

      if (artist.length > 0 && track.length > 0 && album.length > 0) {
        let entry = this.store.createRecord('playlistentry', {
          artist: artist,
          title: track,
          album: album,
          duration: duration, 
          index: index,
          local: this.getWithDefault('local', false),
          australian: this.getWithDefault('australian', false),
          female: this.getWithDefault('female', false),
          newRelease: this.getWithDefault('newRelease', false),
          playlist: this.model
        });
        entry.save().then( (entry) => {
          window.scrollTo(0, document.body.scrollHeight);
          Ember.$("#new-track-artist-field").focus();
          this.setProperties({errors: null, artist: '', track: '', album: '', duration: '', local: false, australian: false, female: false, newRelease: false});
        }).catch( (failure) => {
          entry.deleteRecord();
          this.set('errors', failure);
        });

      }
      else {

      }
    },

    deleteTrack(track) {
      this.get('deleteCandidate').destroyRecord();
      Ember.$('#deleteModal').modal('hide');
    },

    confirmDelete(track) {
      this.set('deleteCandidate', track);
      Ember.$('#deleteModal').modal();
    },

    submitPlaylist() {
      Ember.$('#saveModal').modal('hide');
      this.model.set('complete', true);
      let self = this;
      this.model.save().then(function()  {
        self.transitionToRoute('playlists.index');
      });
    }
  }
});
