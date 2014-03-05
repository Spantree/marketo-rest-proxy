'use strict';
var soap  = require('node-marketo-soap');

module.exports = function(headerAttrs) {
  return '<mktowsUserId>' + headerAttrs.userId + '</mktowsUserId>' +
    '<requestSignature>' + headerAttrs.requestSignature + '</requestSignature>' +
    '<requestTimestamp>' + headerAttrs.requestTimestamp + '</requestTimestamp>';
};

