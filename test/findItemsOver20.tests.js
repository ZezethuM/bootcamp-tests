describe('Test function findItemsOver20', function(){
    it('it should return a list of all the items that have quantity over 20', function(){
    assert.deepEqual([{name: 'pears', qty: 37}, {name: 'bananas', qty: 27}], findItemsOver20(itemList));
    assert.deepEqual([{name: 'pears', qty: 37}, {name: 'bananas', qty: 27}], findItemsOver20(results));
    assert.deepEqual([], findItemsOver20(results2));
});
    it('it should return an empty array when another data type is inputed', function(){
        assert.deepEqual([], findItemsOver20(''));
    });
});