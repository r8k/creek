define('LoginView',[
  'jquery',
  'underscore',
  'backbone',
  'mustache'
], function($, _, Backbone, Mustache) {
  LoginView = Backbone.View.extend({
      tmpl: $('#login-tmpl').html(),

      events:{
        'submit .well.form-inline.sigin': 'login'
      },

      initialize: function() {
        this.model = new Backbone.Model();
        $(document.body).append(this.render().el);
      },

      login: function(event){
        //this.Processes.fetch();
      },

      render: function() {
        $(this.el).html(Mustache.to_html(this.tmpl, this.model.toJSON()));
        return this;
      }
  });
  return LoginView;
});