describe("Test function totalPhoneBill", function(){
it("it should return total phone bill from the passed string of calls and sms's", function(){
    assert.equal('R' + 9.55, totalPhoneBill('call,call,sms,call,sms'));
});

it('it should return R0.00 when an empty string is passed.', function(){
    assert.equal('R' + '0.00', totalPhoneBill(''));
});

it("it should return R0.00 when string of something other than calls and sms's is passed in", function(){
    assert.equal('R' + '0.00', totalPhoneBill('bundles, bundles, mms'));
});
});