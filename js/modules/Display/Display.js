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
  }

  Display.prototype.render = function(data){
    if(data){
      _.templateSettings.variable = "datatree";
      var template = _.template($("script.template").html());
      $("h1#display").after(template(data));
      this.display.triggerDoneRendering();
    }
    else{
      this.options.$el.html(this.name + ' rendered.');
    }
      
  }

  Display.prototype.triggerDoneRendering = function(){
    this.trigger("rendering:done");
  }
  
  _.extend(Display.prototype, Backbone.Events);

  return Display;

});
