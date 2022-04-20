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