describe('Test function transportFee', function(){
    it('it should return the transport fee for the Shift passed in.', function(){
        assert.equal('R20', transportFee('morning'));
    });

    it('it should return undefined when another shift that is not morning,afternoon or nightshit is passed in', function(){
        assert.equal(undefined, transportFee("evening"));
    });

    it('it should return null when an empty string is passed.', function(){
        assert.equal(null, transportFee(''));
    });
});