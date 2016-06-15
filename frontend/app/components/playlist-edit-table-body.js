import Ember from 'ember';

export default Ember.Component.extend({
  
  tagName: '',

  fixWidthHelper: function(e, ui) {
    ui.children().each(function() {
      $(this).width($(this).width());
    });
    return ui;
  },

  didInsertElement: function() {
    Ember.$('#tracklisting').sortable({
      helper: function(e, ui) {
        ui.children().each(function() {
          $(this).width($(this).width());
        });
        return ui;
      },
    });
    Ember.$('#tracklisting').disableSelection();
  }
});
