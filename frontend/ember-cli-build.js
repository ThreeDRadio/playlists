/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  app.import('bower_components/bootstrap/dist/css/bootstrap.css');
  app.import('bower_components/bootstrap/dist/css/bootstrap-theme.css');
  app.import('bower_components/bootstrap/dist/js/bootstrap.js');
  app.import('bower_components/moment/moment.js');
  app.import('bower_components/jquery.floatThead/dist/jquery.floatThead.js');
  app.import('bower_components/jquery-ui/jquery-ui.js');
  app.import('bower_components/jquery-ui/themes/smoothness/jquery-ui.css');
  app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2', {destDir: '/fonts'});

  // fucking import doesn't support globs by design
  app.import('bower_components/jquery-ui/themes/smoothness/images/ui-bg_flat_75_ffffff_40x100.png', {destDir: '/assets/images'});
  app.import('bower_components/jquery-ui/themes/smoothness/images/ui-bg_highlight-soft_75_cccccc_1x100.png', {destDir: '/assets/images'});

  app.import('bower_components/jquery-ui/themes/smoothness/images/ui-bg_glass_75_e6e6e6_1x400.png', {destDir: '/assets/images'});
  app.import('bower_components/jquery-ui/themes/smoothness/images/ui-icons_222222_256x240.png', {destDir: '/assets/images'});
  app.import('bower_components/jquery-ui/themes/smoothness/images/ui-bg_glass_55_fbf9ee_1x400.png', {destDir: '/assets/images'});
  app.import('bower_components/jquery-ui/themes/smoothness/images/ui-bg_glass_75_dadada_1x400.png', {destDir: '/assets/images'});
  app.import('bower_components/jquery-ui/themes/smoothness/images/ui-bg_glass_65_ffffff_1x400.png', {destDir: '/assets/images'});
  app.import('bower_components/jquery-ui/themes/smoothness/images/ui-icons_454545_256x240.png', {destDir: '/assets/images'});
  return app.toTree();
};
