// Filename: index-app.js
define([
  'jquery',
  'underscore',
  'backbone',
  'mustache',
  'AppView',
], function($, _, Backbone, Mustache, LoginView){
  var initialize = function(){
    var creekapps = new AppView();
  };

  return { 
    initialize: initialize
  };
});
