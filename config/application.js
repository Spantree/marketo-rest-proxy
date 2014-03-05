'use strict';

var env           = process.env.NODE_ENV || 'development';
var packageJson   = require('../package.json');
var express       = require('express');
var bodyParser    = require('body-parser');
var fs            = require('fs');

console.log('Loading App in ' + env + ' mode.');

var App = {
  app:        express(),
  config:     require('./config')[env],
  version:    packageJson.version,
  port:       process.env.PORT || 3000,
  root:       __dirname + '/..',
  require:    function(path) {
    return require(this.appPath(path));
  },
  appPath:    function(path) {
    return this.root + '/' + path;
  },
  log:        function() {
    if(process.env.V) {
      console.log.apply(console, arguments);
    }
  },
  env:        env,
  start:      function(){
    if(!this.started){
      this.started = true;
      this.app.listen(this.port);
      console.log('Running App Version ' + App.version + ' on port ' + App.port + ' in ' + App.env + ' mode.');
    }
  },
  shutdown:   function(){
    console.log('Manually shutting down App.');
  }
};

if(!App.config) {
  console.log('ERROR: No config specified for ' + env + ' environment.');
  process.exit(1);
}

App.app.use(bodyParser());

module.exports = App;

