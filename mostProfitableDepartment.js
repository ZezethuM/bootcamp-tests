function mostProfitableDepartment(salesData) {
  var salesMap = {}; 
   
  for(var i = 0; i < salesData.length; i++) {
      var departments = salesData[i];
    salesMap[departments.department] = 0;
  }
  
   for(var i = 0; i < salesData.length; i++) {
      var departments = salesData[i];
    var currDepTotal = salesMap[departments.department];
    currDepTotal += departments.sales;
    salesMap[departments.department] = currDepTotal;
  }
  //looking for the most profitable department.
  var currentSales = 0;
  var currentDepartment = '';
  for(var departmentsDepartment in salesMap) {
    var currDepartmentSales = salesMap[departmentsDepartment];
    if(currDepartmentSales > currentSales) {
        currentSales = currDepartmentSales;
      currentDepartment = departmentsDepartment;
    }
  }
  return  currentDepartment;
 }