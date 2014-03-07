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
    '<attrName>Position</attrName><attrValue>' + leadAttributes.JobTitle + '</attrValue>' +
    '</attribute>' +
    '<attribute>' +
    '<attrName>Company</attrName><attrValue>' + leadAttributes.Company + '</attrValue>' + 
    '</attribute>' +
    '</leadAttributeList>' +
    '</leadRecord>' +
    '<returnLead>true</returnLead>' +
    '</tns:paramsSyncLead>';
};

