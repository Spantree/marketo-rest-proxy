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
    '<attribute>' +
    '<attrName>Title</attrName><attrValue>' + leadAttributes.Title + '</attrValue>' +
    '</attribute>' +
    '<attribute>' +
    '<attrName>Company</attrName><attrValue>' + leadAttributes.Company + '</attrValue>' + 
    '</attribute>' + 
    mainPhone(leadAttributes) + country(leadAttributes)+
    '</leadAttributeList>' +
    '</leadRecord>' +
    '<returnLead>true</returnLead>' +
    '</tns:paramsSyncLead>';
};


   //MainPhone
   function mainPhone(leadAttributes){
    if(leadAttributes.MainPhone){
    console.log("hey, there is a main phone!");
    return'<attribute>' +
    '<attrName>MainPhone</attrName><attrValue>' + leadAttributes.MainPhone + '</attrValue>' +
    '</attribute>' ; }
    else {return null;}
    };

//LeadStatus
//    if(leadAttributes.LeadStatus){
'<attribute>' +
    '<attrName>LeadStatus</attrName><attrValue>' + leadAttributes.LeadStatus + '</attrValue>' +
    '</attribute>' + //}
//LeadScore
  //  if(leadAttributes.LeadScore){
'<attribute>' +
    '<attrName>LeadScore</attrName><attrValue>' + leadAttributes.LeadScore + '</attrValue>' +
    '</attribute>' + //}
//LeadSource
    //if(leadAttributes.LeadSource){
'<attribute>' +
    '<attrName>LeadSource</attrName><attrValue>' + leadAttributes.LeadSource + '</attrValue>' +
    '</attribute>' +  //}
//Address
  //  if(leadAttributes.Address){
'<attribute>' +
    '<attrName>Address</attrName><attrValue>' + leadAttributes.Address + '</attrValue>' +
    '</attribute>' + //}
//City
'<attribute>' +
    '<attrName>City</attrName><attrValue>' + leadAttributes.City + '</attrValue>' +
    '</attribute>' +
//State
'<attribute>' +
    '<attrName>State</attrName><attrValue>' + leadAttributes.State + '</attrValue>' +
    '</attribute>' +
//PostalCode
'<attribute>' +
    '<attrName>PostalCode</attrName><attrValue>' + leadAttributes.PostalCode + '</attrValue>' +
    '</attribute>' +

//Country
    function country(leadAttributes){
    if(leadAttributes.Country){
    return '<attribute>' +
    '<attrName>Country</attrName><attrValue>' + leadAttributes.Country + '</attrValue>' +
    '</attribute>' }
    else {return null;};
    };

//BestTimetoContact
'<attribute>' +
    '<attrName>BestTimetoContact</attrName><attrValue>' + leadAttributes.BestTimetoContact + '</attrValue>' +
    '</attribute>' + 

