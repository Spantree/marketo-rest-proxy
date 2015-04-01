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
  uri: 'http://localhost:3000/syncLead',
  method: 'POST',
  json: {
    header: {
      userId: config.userID,
      requestSignature: hashConvert('' + timestamp + config.userID),
      requestTimestamp: timestamp
    },
    leadRecord: {
      Email: 'titus@operus.net',
      FirstName: 'Titus',
      LastName: 'Operus',
      LeadSource: 'test',
      Country: 'test country',
      MktowURL: 'https://452-ZON-215.mktoapi.com/soap/mktows/2_3?WSDL'
    }
  }}, function (err, response, body) {
    if(err){
      return console.error('ERROR: ', err);
    } 
    console.log('body: ', body);

  }
);

