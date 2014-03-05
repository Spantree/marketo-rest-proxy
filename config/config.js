'use strict';

var configBase = {
  root: require('path').normalize(__dirname + '/..'),
  app: {
    name: 'App'
  }
};

var test = JSON.parse(JSON.stringify(configBase));

var production = JSON.parse(JSON.stringify(configBase));

module.exports = {
  development:  configBase,
  test:         test,
  production:   production
};

