// Author: Rajiv Kilaparti
// Filename: login.js

require.config({
  paths: {
    jquery: 'libs/jquery/jquery-min',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone-min',
    mustache: 'libs/mustache/mustache-min'
  }

});

require([
  'login-app',
], function(App){
  App.initialize();
});
define("login", function(){});