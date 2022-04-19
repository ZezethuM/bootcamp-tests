 function totalPhoneBill(callsAndSms) {

    var callsArr = callsAndSms.split(',');
      var countCalls = 0;
      var countSms = 0;
      var total = 0;
  
  for(var i = 0; i < callsArr.length; i++) {
      var newArr = callsArr[i].trim();

    if(newArr == 'call') {
        countCalls += 2.75;
    }
    else if(newArr == 'sms') {
        countSms += 0.65;
    }
  }
  total = countCalls + countSms;
  return 'R' + total.toFixed(2);
}