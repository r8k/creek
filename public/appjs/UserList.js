App.UserList = Backbone.Collection.extend({
    model: App.User,

    url: '/',

    comparator: function(process) {
      return process.get('file');
    },

    getByPID: function(pid) {
      return this.detect(function(process) {
          return process.get('pid') == pid;
      });
    }
});