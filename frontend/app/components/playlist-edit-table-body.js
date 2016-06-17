import Ember from 'ember';

export default Ember.Component.extend({
  
  tagName: '',

  fixWidthHelper: function(e, ui) {
    ui.children().each(function() {
      Ember.$(this).width(Ember.$(this).width());
    });
    return ui;
  },

  updateSortedOrder: function(indices) {
    this.beginPropertyChanges();
    this.get('model.tracks').forEach((track) => {
      var index = indices[track.get('id')] +1;
      if (track.get('index') !== index) {
        track.set('index',index);
        track.save();
      }
    });
    this.endPropertyChanges();
  },

  didInsertElement: function() {
    var component = this;

    Ember.$('#tracklisting').sortable({
      helper: function(e, ui) {
        ui.children().each(function() {
          Ember.$(this).width(Ember.$(this).width());
        });
        return ui;
      },
      update: function() {
        let indices = {};

        Ember.$(this).find('.playlistentry').each( (index, item) => {
          indices[Ember.$(item).data('id')] = index;
        });

        component.updateSortedOrder(indices);
      },
    });
    Ember.$('#tracklisting').disableSelection();
  }
});
