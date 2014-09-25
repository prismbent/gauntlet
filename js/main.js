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
      var eventBus = _.extend({}, Backbone.Events);

      this.control = new Control({
        $el: this.$el.find("#control"),
        eventBus: eventBus
      });
      this.display = new Display({
        $el: this.$el.find("#display"),
        eventBus: eventBus
      });
      this.render();
    },
    render: function() {
      this.control.render();
    }
  });

 var app = new App();


});
