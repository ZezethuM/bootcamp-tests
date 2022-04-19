describe('Test function that checks Weekdays' , function(){
    it("it should return fasle when called with a day that is not a Weekday", function(){
        assert.equal(false, isWeekday('Sunday'));
    });

    it("it should return true when called with a day that is a Weekday", function(){
        assert.equal(true, isWeekday('Monday'));
    }); 

    it("it should return an empty string when called with an empty string", function(){
        assert.equal('', isWeekday(''));
    });  
      
});