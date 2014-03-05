marketo-rest-proxy
==================

Proxies Marketo's SOAP api through a Pseudo-REST Proxy.

# Requirements
__Node__ v0.10.26

# Installation
> npm install

# Starting the Server
> node index

# Endpoints
### /syncLead
Allows a POST request that will be translated into a SOAP request. Format of request:
```javascript
  {
      header: {userId: ..., requestTimestamp: ..., requestSignature: ...},
      leadRecord: {Email: ...., FirstName: ...., LastName: ....}
  }
```

Example using node request:
```javascript
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
      LastName: 'Operus'
    }
  }}, function (err, response, body) {
    if(err){
      return console.error('ERROR: ', err);
    } 
    console.log('body: ', body);

  }
);

```
