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
    mainPhone(leadAttributes) + leadStatus(leadAttributes) +
    leadScore(leadAttributes) + address(leadAttributes) +
    city(leadAttributes) + state(leadAttributes) +
    postCode(leadAttributes) + country(leadAttributes)+
    bestTime(leadAttributes) +
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
    else {return null;}
};

function company(leadAttributes){
	if(leadAttributes.Company){
    	return '<attribute>' +
    		'<attrName>Company</attrName><attrValue>' + leadAttributes.Company + '</attrValue>' + 
    		'</attribute>' }
    else {return null;}
}; 

   //MainPhone
function mainPhone(leadAttributes){
    if(leadAttributes.Phone){
	    return'<attribute>' +
    		'<attrName>Phone</attrName><attrValue>' + leadAttributes.MainPhone + '</attrValue>' +
    		'</attribute>' }
    else {return null;}
};

	 //LeadStatus
function leadStatus(leadAttributes){
    if(leadAttributes.LeadStatus){
		return '<attribute>' +
		    '<attrName>LeadStatus</attrName><attrValue>' + leadAttributes.LeadStatus + '</attrValue>' +
		    '</attribute>' }
    else {return null;}
}; 
 //LeadScore
function leadScore(leadAttributes){
    if(leadAttributes.LeadScore){
		return '<attribute>' +
    		'<attrName>LeadScore</attrName><attrValue>' + leadAttributes.LeadScore + '</attrValue>' +
    		'</attribute>'  }
    else {return null;}
};
//LeadSource
function leadSource(leadAttributes){
    if(leadAttributes.LeadSource){
		return '<attribute>' +
    		'<attrName>LeadSource</attrName><attrValue>' + leadAttributes.LeadSource + '</attrValue>' +
    		'</attribute>'  }
    else {return null;}
};
//Address
function address(leadAttributes){
    if(leadAttributes.Address){
		return '<attribute>' +
    		'<attrName>Address</attrName><attrValue>' + leadAttributes.Address + '</attrValue>' +
    		'</attribute>' }
    else {return null;}
};
//City
function city(leadAttributes){
	if(leadAttributes.City){
		return '<attribute>' +
    		'<attrName>City</attrName><attrValue>' + leadAttributes.City + '</attrValue>' +
    		'</attribute>' }
    else {return null;}
};
//State
function state(leadAttributes){
	if(leadAttributes.State){
		return '<attribute>' +
    		'<attrName>State</attrName><attrValue>' + leadAttributes.State + '</attrValue>' +
    		'</attribute>' }
    else {return null;}
};
//PostalCode
function postCode(leadAttributes){
	if(leadAttributes.PostalCode){
		return '<attribute>' +
    		'<attrName>PostalCode</attrName><attrValue>' + leadAttributes.PostalCode + '</attrValue>' +
    		'</attribute>' }
    else {return null;}
};

//Country
function country(leadAttributes){
    if(leadAttributes.Country){
	    return '<attribute>' +
    		'<attrName>Country</attrName><attrValue>' + leadAttributes.Country + '</attrValue>' +
    		'</attribute>' }
    else {return null;};
};

//BestTimetoContact
function bestTime(leadAttributes){
	if(leadAttributes.BestTimetoContact){
		return '<attribute>' +
    		'<attrName>BestTimetoContact</attrName><attrValue>' + leadAttributes.BestTimetoContact + '</attrValue>' +
    		'</attribute>' }
    else {return null;}
};