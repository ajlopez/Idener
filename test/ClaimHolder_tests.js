
const ClaimHolder = artifacts.require('./ClaimHolder.sol');

contract('ClaimHolder', function (accounts) {
    beforeEach(async function() {
        this.claimHolder = await ClaimHolder.new();
    });
    
    it('Unknown key has no purpose', async function() {
        var result = await this.claimHolder.getClaim([]);

        assert.ok(Array.isArray(result));
        assert.equal(result.length, 6);
        assert.equal(result[0], 0);
        assert.equal(result[1], 0);
        assert.equal(result[2], 0);
        console.dir(result[3]);
        assert.equal(result[3], '0x');
        assert.equal(result[4], '0x');
        assert.equal(result[5], "");
    });
});


