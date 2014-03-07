'use strict';

var request   = require('request');
var CryptoJS  = require('crypto');
var moment    = require('moment');
var config    = require(process.env.HOME + '/.marketo-api/config');

function hashConvert(somestring) {
  return CryptoJS.createHmac('sha1',config.secretKey).update(somestring).digest('hex');
}

var timestamp = moment().utc().format("YYYY-MM-DDTHH:mm:ssZ");

request({
  uri: 'http://localhost:3000/describeLeadRecord',
  method: 'POST',
  json: {
    header: {
      userId: config.userID,
      requestSignature: hashConvert('' + timestamp + config.userID),
      requestTimestamp: timestamp
    }
  }}, function (err, response, body){
    if(err){
      return console.error('ERROR: ', err);
    }
    console.log('body: ', body);
    console.log('field: ', body.metadata.fieldList.field);
  });


