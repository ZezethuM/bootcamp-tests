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
describe('Test function findItemsOver given treshold', function(){
    it('it should return list of item over treshold', function(){
    assert.deepEqual([{name: 'pears', qty: 37}], findItemsOver(itemList, 30));
    assert.deepEqual([{name: 'pears', qty: 37}], findItemsOver(results, 30));
    assert.deepEqual(results2, findItemsOver(itemList2, 30));
    });
    it('It should return an empty array when called with a different data type', function(){
        assert.deepEqual(results2, findItemsOver('name: "apples", qty: 10', 'name: "pears", qty: 37'));
    }); 
});