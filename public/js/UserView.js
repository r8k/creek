define([
  'jquery',
  'underscore',
  'backbone',
  'mustache'
], function($, _, Backbone, Mustache) {
  UserView = Backbone.View.extend({
    tagName: "div",
    className: "row",

    tmpl: $('#process-tmpl').html(),

    events: {
      "click .info":      "info"
    },

    initialize: function() {
      this.model.bind('destroy', this.remove, this);
    },

    render: function() {
      $(this.el).html(Mustache.to_html(this.tmpl, this.model.toJSON()));
      return this;
    },

    info: function(e){
      if(e){
        e.preventDefault()
      }

      var $row = $(this.el);
      $row.addClass('load');

      this.model.info(function(infos){
        this._showInfo($row, infos);
        $row.removeClass('load');
      }.bind(this));
    },

    remove: function(){
      $(this.el).remove();
    }
  });
  return UserView;
});