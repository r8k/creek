define("UserList",[
  'jquery',
  'underscore',
  'backbone',
  'mustache',
  'User'
], function($, _, Backbone, Mustache, User) {
  UserList = Backbone.Collection.extend({
      model: User,

      url: '/data',

      comparator: function(process) {
        return process.get('file');
      },

      parse: function(res) { 
        // because of jsonp 
        return res;
      },

      getByPID: function(pid) {
        return this.detect(function(process) {
            return process.get('pid') == pid;
        });
      }
  });
  return UserList;
});