describe('Test function fromWhere', function(){
it('it should return the town the passed registration hexadecimal string is from', function(){
    assert.equal('Bellville' , fromWhere('CY'));
});

it('it should return undefined when a string of numbers is passed', function(){
    assert.equal(undefined , fromWhere('1452 CY'));
});

it('it should return null when an empty string is passed', function(){
    assert.equal(null, fromWhere(""));
});

});