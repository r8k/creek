// Filename: index-app.js
define("index-app",[
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
