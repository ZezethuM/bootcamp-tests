describe('Test function countRegNumber' , function(){
    it("it should return the number of registration numbers passed into it", function(){
        assert.equal(3, countRegNumber('3223 CJ,4322 GP,8652 EC'));
    });

    it("it should return 1 when called with a empty string ", function(){
        assert.equal(1, countRegNumber('5445 CJ'));
    }); 

    it("it should return 1 when called with an empty string ", function(){
        assert.equal(1, countRegNumber(''));
    }); 
      
});