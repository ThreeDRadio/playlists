import Ember from 'ember';

export default Ember.Component.extend({
  
  tagName: '',

  fixWidthHelper: function(e, ui) {
    ui.children().each(function() {
      $(this).width($(this).width());
    });
    return ui;
  },

  updateSortedOrder: function(indices) {
    this.beginPropertyChanges();
    let tracks = this.get('model.tracks').forEach((track) => {
      var index = indices[track.get('id')] +1;
      if (track.get('index') !== index) {
        track.set('index',index+1);
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
          $(this).width($(this).width());
        });
        return ui;
      },
      update: function(e, ui) {
        let indices = {};

        $(this).find('.playlistentry').each( (index, item) => {
          indices[$(item).data('id')] = index;
        });

        //$(this).sortable('cancel');
        component.updateSortedOrder(indices);
      },
    });
    Ember.$('#tracklisting').disableSelection();
  }
});
