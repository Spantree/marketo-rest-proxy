'use strict';

module.exports = function(leadAttributes) {
  return '<tns:paramsSyncLead>' + 
    '<leadRecord>' +
    '<Email>' + leadAttributes.Email + '</Email>' +
    '<leadAttributeList>' +
    '<attribute>' +
    '<attrName>FirstName</attrName><attrValue>' + leadAttributes.FirstName + '</attrValue>' +
    '</attribute>' +
    '<attribute>' +
    '<attrName>LastName</attrName><attrValue>' + leadAttributes.LastName + '</attrValue>' +
    '</attribute>' +
    jobTitle(leadAttributes) + company(leadAttributes) +
    phone(leadAttributes) + leadStatus(leadAttributes) +
    leadScore(leadAttributes) + address(leadAttributes) +
    city(leadAttributes) + state(leadAttributes) +
    postCode(leadAttributes) + country(leadAttributes)+
    bestTime(leadAttributes) + leadNotes(leadAttributes) +
    optIn(leadAttributes) + 
    '</leadAttributeList>' +
    '</leadRecord>' +
    '<returnLead>true</returnLead>' +
    '</tns:paramsSyncLead>';
};

function jobTitle(leadAttributes){
	if(leadAttributes.Title){
 		return '<attribute>' +
    		'<attrName>Title</attrName><attrValue>' + leadAttributes.Title + '</attrValue>' +
    		'</attribute>' }
    else {return '';}
};

function company(leadAttributes){
	if(leadAttributes.Company){
    	return '<attribute>' +
    		'<attrName>Company</attrName><attrValue>' + leadAttributes.Company + '</attrValue>' + 
    		'</attribute>' }
    else {return '';}
}; 

   //MainPhone
function phone(leadAttributes){
    if(leadAttributes.Phone){
	    return'<attribute>' +
    		'<attrName>Phone</attrName><attrValue>' + leadAttributes.Phone + '</attrValue>' +
    		'</attribute>' }
    else {return '';}
};

	 //LeadStatus
function leadStatus(leadAttributes){
    if(leadAttributes.LeadStatus){
		return '<attribute>' +
		    '<attrName>LeadStatus</attrName><attrValue>' + leadAttributes.LeadStatus + '</attrValue>' +
		    '</attribute>' }
    else {return '';}
}; 
 //LeadScore
function leadScore(leadAttributes){
    if(leadAttributes.LeadScore){
		return '<attribute>' +
    		'<attrName>LeadScore</attrName><attrValue>' + leadAttributes.LeadScore + '</attrValue>' +
    		'</attribute>'  }
    else {return '';}
};
//LeadSource
function leadSource(leadAttributes){
    if(leadAttributes.LeadSource){
		return '<attribute>' +
    		'<attrName>LeadSource</attrName><attrValue>' + leadAttributes.LeadSource + '</attrValue>' +
    		'</attribute>'  }
    else {return '';}
};
//Address
function address(leadAttributes){
    if(leadAttributes.Address){
		return '<attribute>' +
    		'<attrName>Address</attrName><attrValue>' + leadAttributes.Address + '</attrValue>' +
    		'</attribute>' }
    else {return '';}
};
//City
function city(leadAttributes){
	if(leadAttributes.City){
		return '<attribute>' +
    		'<attrName>City</attrName><attrValue>' + leadAttributes.City + '</attrValue>' +
    		'</attribute>' }
    else {return '';}
};
//State
function state(leadAttributes){
	if(leadAttributes.State){
		return '<attribute>' +
    		'<attrName>State</attrName><attrValue>' + leadAttributes.State + '</attrValue>' +
    		'</attribute>' }
    else {return '';}
};
//PostalCode
function postCode(leadAttributes){
	if(leadAttributes.PostalCode){
		return '<attribute>' +
    		'<attrName>PostalCode</attrName><attrValue>' + leadAttributes.PostalCode + '</attrValue>' +
    		'</attribute>' }
    else {return '';}
};

//Country
function country(leadAttributes){
    if(leadAttributes.Country){
	    return '<attribute>' +
    		'<attrName>Country</attrName><attrValue>' + leadAttributes.Country + '</attrValue>' +
    		'</attribute>' }
    else {return '';}
};

//BestTimetoContact
function bestTime(leadAttributes){
	if(leadAttributes.BestTimetoContact){
		return '<attribute>' +
    		'<attrName>BestTimetoContact</attrName><attrValue>' + leadAttributes.BestTimetoContact + '</attrValue>' +
    		'</attribute>' }
    else {return '';}
};

function leadNotes(leadAttributes){
    if(leadAttributes.LeadNotes){
        return '<attribute>' +
            '<attrName>leadAdditionalNotes</attrName><attrValue>' + leadAttributes.LeadNotes + '</attrValue>' +
            '</attribute>' }
    else {return '';}
};

function optIn(leadAttributes){
    if(leadAttributes.OptIn){
        return '<attribute>' +
            '<attrName>OptIn</attrName><attrValue>' + leadAttributes.OptIn + '</attrValue>' +
            '</attribute>' }
    else {return '';}
};