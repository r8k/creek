// Author: Rajiv Kilaparti
// Filename: index.js

require.config({
  paths: {
    jquery: 'libs/jquery/jquery-min',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone-min',
    mustache: 'libs/mustache/mustache-min'
  }

});

require([
  'index-app',
], function(App){
  App.initialize();
});