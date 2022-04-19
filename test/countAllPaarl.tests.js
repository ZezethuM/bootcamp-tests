describe('Test Function countAllPaarl', function(){
    it("it should return the number or registration numbers from Paarl when called with a string of registrtion numbers", function(){
        assert.equal(3, countAllPaarl("CJ 1515,CJ 6646,CJ 4442,3636 ZN,3446 EC"));
    });

    it('it should return 0 when the registration numbers passed do not start hexadecimal numbers', function(){
        assert.equal(0, countAllPaarl("4555 CJ, 5644 CJ, 1114 GP"));
    });
});