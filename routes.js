'use strict';
var _               = require('underscore');
var soap            = require('node-marketo-soap');
var createHeader    = require('./createHeader');
var createLead      = require('./createLead');
var describeMObject = require('./describeMObject');

var mktowNamespace = 'http://www.marketo.com/mktows/';
//var marketoUrl = 'https://452-ZON-215.mktoapi.com/soap/mktows/2_3?WSDL';

function validateHeader(header){
  var errorMessage = {};
  if(_.isUndefined(header) || _.isNull(header)){
    errorMessage.header = 'Kindly provide the header information!';
  } else {
    if(_.isUndefined(header.requestTimestamp) || _.isNull(header.requestTimestamp) ) {
      errorMessage.requestTimestamp = 'Kindly provide a requestTimestamp!';
    }
    if(_.isUndefined(header.requestSignature) || _.isNull(header.requestSignature) ){
      errorMessage.requestSignature = 'Kindly proivde a requestSignature!';
    }
    if(_.isUndefined(header.userId) || _.isNull(header.userId) ){
      errorMessage.userId = 'Kindly proivde a userId!';
    }
  }
  return errorMessage;
}

function validateLeadAttributes(leadRecord){
  var errorMessage = {};
  if(_.isUndefined(leadRecord) || _.isNull(leadRecord) ){
    errorMessage.leadRecord = "Kindly provide a leadRecord!";
  } else {
    if(_.isUndefined(leadRecord.Email) || _.isNull(leadRecord.Email)){
      errorMessage.Email = 'Kindly provide an Email for the lead!';
    }
    if(_.isUndefined(leadRecord.FirstName) || _.isNull(leadRecord.FirstName)){
      errorMessage.FirstName = 'Kindly provide a FirstName for the lead!';
    }
    if(_.isUndefined(leadRecord.LastName) || _.isNull(leadRecord.LastName)){
      errorMessage.LastName = 'Kindly provide a LastName for the lead!';
    }
  }
  return errorMessage;
}

function validate(obj) {
  var headerErrors = validateHeader(obj.header);
  var leadErrors = validateLeadAttributes(obj.leadRecord);
  return mergeObjects(headerErrors, leadErrors);
}

function mergeObjects(obj1, obj2) {
  var result = {};
  if(_.keys(obj1).length > 0 ){
    _.keys(obj1).forEach(function(key){
      result[key] = obj1[key];
    });
  }
  if(_.keys(obj2).length > 0) {
    _.keys(obj2).forEach(function(key){
      result[key] = obj2[key];
    });
  }
  return result;
}


module.exports = function(app) {
  app.get('/', function(req, res) {
    res.json({message: 'HELLO'});
  });

  app.post('/syncLead', function(req, res){
    console.log("Got Request from IP: " + req.ip + " for :" + JSON.stringify(req.body));
    var errors = validate(req.body);
    if(_.isEmpty(errors)){
      createHeader(req.body.header);
      marketoUrl = req.body.leadAttributes.MktowURL;
      soap.createMarketoClient(marketoUrl, function(err, client) {
        client.addSoapHeader(createHeader(req.body.header), mktowNamespace);
        client.syncLead(createLead(req.body.leadRecord), function(error, result){
          if(error) {
            console.error('ERROR: ', error.body);
            console.log('Last Request: ', client.lastRequest);
            res.json({Error: error.body});
          } else{
            res.json(result.result);
          }
        });
      });
    } else {
      res.json(errors);
    }
  });

  app.post('/describeLeadRecord', function(req, res){
    console.log("Got Request from IP: " + req.ip + " for :" + JSON.stringify(req.body));
    soap.createMarketoClient(marketoUrl, function(err, client){
      client.addSoapHeader(createHeader(req.body.header), mktowNamespace);
      client.describeMObject(describeMObject('LeadRecord'), function(error, result){
        if(error){
          console.log('ERROR: ', error.body);
          console.log('Last Request: ', client.lastRequest);
          res.json({Error: error.body});
        } else{
          res.json(result.result);
        }
      });
    });
  });
};

