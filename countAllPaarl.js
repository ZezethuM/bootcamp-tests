function countAllPaarl(regNumbers) {
  
    var regArr = regNumbers.split(',');
      var array = [];
      var counter = 0;
      
      for(var i = 0; i < regArr.length; i++) {
          var newArr = regArr[i].trim();
        if(newArr.startsWith('CJ')){
            array.push(newArr);
          counter++;
        }
      }
      return counter;
    }