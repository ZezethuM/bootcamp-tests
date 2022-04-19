describe('Test my greet function' , function(){
    it("it should return 'Hello, Khazimla' when called with 'Khazimla'", function(){
        assert.equal('Hello, Khazimla', greet('Khazimla'));
    });

    it("it should return 'Hello, 125' when called with a number "  , function(){
        assert.deepEqual("Hello, 125", greet(125));
    }); 

    it("it should return space when called with an empty string", function(){
        assert.equal("Hello, ", greet(''));
    });  
      
});