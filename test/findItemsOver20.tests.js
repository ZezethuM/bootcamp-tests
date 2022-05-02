var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
  ];
  
  var results = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
  ];
  
  var itemList2 = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 19},
    {name : 'bananas', qty : 17},
    {name : 'apples', qty : 3},
  ];
  
  var results2 = [];
  
  var itemList3 = [
    {name : 'apples', qty : 40},
    {name : 'pears', qty : 20},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
  ];
  
  var results3 = [
    {name : 'apples', qty : 40},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
  ];

describe('Test function findItemsOver20', function(){
    it('it should return a list of all the items that have quantity over 20', function(){
    assert.deepEqual(results, findItemsOver20(itemList));
    assert.deepEqual(results, findItemsOver20(results));
    assert.deepEqual(results2, findItemsOver20(results2));
});
    it('it should return an empty array when another data type is inputed', function(){
        assert.deepEqual(results2, findItemsOver20(''));
    });
});