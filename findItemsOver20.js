function findItemsOver20(list) {
    var resultObj = [];
    for(var i = 0; i < list.length; i++) {
      var newList = list[i];
     if(newList.qty > 20) {
          resultObj.push(newList);
      }
    }
    return resultObj;
  }
  
  
