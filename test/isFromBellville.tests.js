describe('Test function isFromBellville' , function(){
    it("it should return true when called with registration No. that is from Bellville", function() {
        assert.equal(true, isFromBellville('CY 12055'));
    });

    it("it should return false when called with registration number that is from another town", function(){
        assert.equal(false, isFromBellville('CJ 1452'));
    }); 

    it("it should return false when called with registration number that does not start with letters", function(){
        assert.equal(false, isFromBellville('12554 CY'));
    }); 
});