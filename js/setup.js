require.config({
  baseUrl: 'js',
  paths: {
    jquery: '../lib/jquery-2.0.3.min',
    underscore: '../lib/underscore-min',
    backbone: '../lib/backbone-min'
  },
  shim: {
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    underscore: {
      exports: "_"
    }
  }
});
require(['main']);
