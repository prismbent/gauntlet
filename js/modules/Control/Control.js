define([
  "underscore",
  "jquery",
  "backbone"
], 

function( _, $, Backbone){

  var Control = function(options){
    this.name = "Control";
    this.options = _.defaults(options, {
      $el: null
    });
    this.initialize();
  }

  Control.prototype.initialize = function(){
    console.log(this.name + ": initialize");
    this.getFeed()
  }

  Control.prototype.render = function(){
    this.options.$el.html(this.name + ' rendered.');
  }

  Control.prototype.getFeed = function(){
    that = this;
    $.ajax({
        type: "GET",
        url: "../../gauntlet/data/test-data.json",
        dataType: "json"}).done(
          function(data){
            that.parse(data)
          }
        ).fail(function(){console.log("can't seem to locate that feed")});
  }

  Control.prototype.parse = function(data) {
    var parsed = typeof data == "string"? JSON.parse(data): data;
    this.trigger("parsing:done", parsed); 
  }

  Control.prototype.showSuccess = function() {
    console.log("Woohoo, looks like everything is done.");
  }

  _.extend(Control.prototype, Backbone.Events);

  return Control;

});
