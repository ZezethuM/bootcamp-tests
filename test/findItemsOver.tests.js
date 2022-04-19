describe('Test function findItemsOver given treshold', function(){
    it('it should return list of item over treshold', function(){
    assert.deepEqual([{name: 'pears', qty: 37}], findItemsOver(itemList, 30));
    assert.deepEqual([{name: 'pears', qty: 37}], findItemsOver(results, 30));
    assert.deepEqual([], findItemsOver(itemList2, 30));
    });
    it('It should return an empty array when called with a different data type', function(){
        assert.deepEqual([], findItemsOver('name: "apples", qty: 10', 'name: "pears", qty: 37'));
    }); 
});