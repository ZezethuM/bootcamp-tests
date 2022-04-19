describe('Test registration Check function' , function(){
    it("it should return true when called with a registration number that matches the registration location provided" , function(){
        assert.equal(true, regCheck("12350 GP", "GP"));
    });

    it("it should return false when called with a registration number that does not match provided registration location."  , function(){
        assert.equal(false, regCheck("15245 CY", "GP"));
    }); 

    it("it should return false when called with a registration number that does not end with registration Location", function(){
        assert.equal(false, regCheck("GP 45215", "GP"));
    });  
      
});