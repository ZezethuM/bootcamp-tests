describe('Test function countAllFromTown', function(){
    it('it should return the number of registration numbers from town of the passed in reg start string', function(){
        assert.equal(3, countAllFromTown('CJ 5155, ZN 4965, EC 2156, CJ 455422, CJ 4632', 'CJ'));
    });

    it('it should return 0 when registration numbers passed in do not start with registration start string', function(){
        assert.equal(0, countAllFromTown('4522 CJ, 5316 ZN, 5122 ZN, 1532 MP', 'ZN'));
    });

    it('it should return empty string when an empty string is passed in', function(){
        assert.equal('', countAllFromTown('', 'ZN'));
    });
});