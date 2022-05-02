function findItemsOver(list, treshold) {
    
    var resultObj = [];
    
    for(var i = 0; i < list.length; i++) {
        var newObject = list[i];
      if(newObject.qty > treshold) {
          resultObj.push(newObject);
      }
    }
      return resultObj;
  }