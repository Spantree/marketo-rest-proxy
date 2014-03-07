'use strict';

module.exports = function(mObjectName){
  return '<tns:paramsDescribeMObject>' +
    '<objectName>' + mObjectName + '</objectName>' +
    '</tns:paramsDescribeMObject>';
};

