define([
  "underscore",
  "jquery",
  "backbone"
], 

function( _, $, Backbone){

  var Display = function(options){
    this.name = "Display";
    this.options = _.defaults(options, {
      $el: null
    });
    this.initialize();
  }

  Display.prototype.initialize = function(){
    console.log(this.name + ": initialize");
    this.listenTo(this.options.eventBus, "parsing:done", this.render);
  }

  Display.prototype.render = function(data){
    if(data){
      _.templateSettings.variable = "datatree";
      var template = _.template($("script.template").html());
      $("h1#display").after(template(data));
      this.options.eventBus.trigger("rendering:done");
    }
    else{
      this.options.$el.html(this.name + ' rendered.');
    }
      
  }

  _.extend(Display.prototype, Backbone.Events);

  return Display;

});
