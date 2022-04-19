describe('Test function yearsAgo' , function(){
    it("it should return the number of year it has been from the year that was passed into it to current year", function(){
        assert.equal(26, yearsAgo(1996));
    });

    it("it should return NaN when another data type is passed other than a number", function(){
        assert.deepEqual(NaN, yearsAgo('ghd'));
    }); 
});