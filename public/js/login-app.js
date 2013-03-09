// Filename: login-app.js
define('login-app',[
  'jquery',
  'underscore',
  'backbone',
  'mustache',
  'LoginView',
], function($, _, Backbone, Mustache, LoginView){
  var initialize = function(){
    var creek = new LoginView();
  };

  return { 
    initialize: initialize
  };
});
