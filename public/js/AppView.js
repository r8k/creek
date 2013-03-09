define([
  'jquery',
  'underscore',
  'backbone',
  'mustache',
  'UserList',
  'UserView'
], function($, _, Backbone, Mustache, UserList, UserView) {
  AppView = Backbone.View.extend({
      el: $(".container"),

      events:{
        'click .refresh': 'refresh'
      },

      initialize: function(processData) {
        // Create our process collection
        var u = this.Processes = new UserList();

        this.Processes.bind('all', this.updateAll, this);

        var request = $.ajax({
            url: "/data",
            type: "get"
        });
        
        request.success(function (response, textStatus, jqXHR){
            u.reset(response); // Will trigger the "all" event
        });
      },

      addOne: function(process){
        var view = new UserView({model: process});
        this.$("#process-list").append(view.render().el);
      },

      updateAll: function() {
        this.$("#process-list").empty();
        this.Processes.each(this.addOne, this);

        /**
         * Update the Process List Count
         */
        this.render();
      },

      refresh: function(){
        this.Processes.fetch();
      },

      render: function() {
        this.$('#process-count').text(this.Processes.length);
      }
  });
  return AppView;
});