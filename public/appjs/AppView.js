App.AppView = Backbone.View.extend({
    el: $(".container"),

    events:{
      'click .refresh': 'refresh'
    },

    initialize: function(processData) {
      // Create our process collection
      this.Processes = new App.ProcessList();

      this.Processes.bind('all', this.updateAll, this);

      // Will trigger the "all" event
      this.Processes.reset(processData);
    },

    addOne: function(process){
      var view = new App.ProcessView({model: process});
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