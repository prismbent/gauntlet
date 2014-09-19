define([
  "underscore",
  "jquery",
  "backbone",
  "modules/Control/Control",
  "modules/Display/Display"
], 

function( _, $, Backbone, Control, Display){

  var App = Backbone.View.extend({
    el: $('#app'),
    initialize: function() {
      this.control = new Control({
        $el: this.$el.find("#control"),
        app: this
      });
      this.display = new Display({
        $el: this.$el.find("#display"),
        app: this
      });
      this.render();
      this.control.on("parsing:done", this.display.render, this);
      this.display.on("rendering:done", this.control.showSuccess);
    },
    render: function() {
      this.control.render();
      this.display.render();
    }
  });

 var app = new App();


});
