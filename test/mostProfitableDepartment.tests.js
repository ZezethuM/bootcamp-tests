describe('Test function mostProfitableDepartment', function(){
    it('it should return most profitable dpartment', function(){
    assert.equal('outdoor', mostProfitableDepartment(salesData));
    assert.equal('electronics', mostProfitableDepartment(salesData2));
    });
    it('it sould return an empty string when empty list is passed', function(){
        assert.deepEqual('', mostProfitableDepartment([]))
    });
});
