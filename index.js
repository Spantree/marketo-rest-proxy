'use strict';

var App = require('./config/application');

App.start();

require('./routes')(App.app);

