var Zap = {
    sync_lead_pre_write: function(bundle) {
      config = {
          userID: "" + bundle.auth_fields.userID,
          secret_key: "" + bundle.auth_fields.secret_key
        };
        var leadNotes, lastName,firstName,concat, signature, timestamp;

        timestamp = moment().utc().format("YYYY-MM-DDTHH:mm:ssZ");  
        concat = "" + timestamp + config.userID;
        var request = require('request');
        var hashconvert= function(concat) {
          var CryptoJS = require('crypto');
          return CryptoJS.createHmac('sha1',config.secret_key).update(concat).digest('hex');
        };
        signature = hashconvert(concat);
  
       var nameLength = bundle.trigger_data.name.split(' ').length;
       if (nameLength > 1){
           firstName = bundle.trigger_data.name.split(' ').slice(0,1).join(' ');
           lastName = bundle.trigger_data.name.split(' ').slice(1,nameLength).join(' ');
       } else {
           firstName = bundle.trigger_data.name;
           lastName = "";
       }
        var email = bundle.action_fields_full.email;
        var jobTitle = bundle.trigger_data.job_title;
        var company = bundle.trigger_data.company;
        var phone = bundle.trigger_data.phone; //Phone
        var leadStatus = bundle.trigger_data.status; //LeadStatus
        var leadScore = bundle.trigger_data.score; //LeadScore
        var leadSource = bundle.trigger_data.source;//LeadSource
        var address = bundle.trigger_data.address; //Address
        var city = bundle.trigger_data.city; //City
        var state = bundle.trigger_data.state; //State
        var postCode = bundle.trigger_data.postal_code; //PostalCode
        var country = bundle.trigger_data.country; //Country
        var bestTime = bundle.trigger_data.bestTime; //BestTimetoContact,
        var optIn = bundle.action_fields_full.optIn;
        var sourceForm = bundle.action_fields_full.sourceForm;
        var mktowURL = "" + bundle.auth_fields.soap_endpoint +"?WSDL";
        
        
        leadNotes ="message: " + bundle.action_fields_full.message; 
        

        
    var _lead = {};
    var uri = 'http://blooming-wildwood-9243.herokuapp.com/syncLead';
    var method = 'PUT';
    var data = {
          "header": {
             "userId": config.userID,
             requestSignature: signature,
             requestTimestamp: timestamp
          },
          leadRecord: {
              Email: email,
              FirstName: firstName,
              LastName: lastName,
              Title: jobTitle,
              Company: company,
              Phone: phone,
              LeadStatus: leadStatus,
              LeadScore: leadScore,
              LeadSource: leadSource,
              Address: address,
              City: city,
              State: state,
              PostalCode: postCode,
              Country: country,
              BestTimetoContact: bestTime,
              LeadNotes: leadNotes,
              OptIn: optIn,
              SourceForm: sourceForm,
              MktowURL: mktowURL
          }
       };
    
    
  
    return {
    url: uri,
    method: method,
    data: JSON.stringify(data)
    };
},

sync_lead_post_write : function(bundle){

return bundle;
}
};





