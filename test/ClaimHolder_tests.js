
const ClaimHolder = artifacts.require('./ClaimHolder.sol');

contract('ClaimHolder', function (accounts) {
    beforeEach(async function() {
        this.claimHolder = await ClaimHolder.new();
    });
    
    it('Get unknown claim', async function() {
        var result = await this.claimHolder.getClaim([]);

        assert.ok(Array.isArray(result));
        assert.equal(result.length, 6);
        assert.equal(result[0], 0);
        assert.equal(result[1], 0);
        assert.equal(result[2], 0);
        assert.equal(result[3], '0x');
        assert.equal(result[4], '0x');
        assert.equal(result[5], "");
    });
    
    it('Add claim', async function() {
        await this.claimHolder.addClaim(
            1,
            2,
            accounts[0],
            [ 0x01 ],
            [ 0x02 ],
            "url"
        );
        
        const claimId = web3.sha3(accounts[0].toString().slice(2) + '0000000000000000000000000000000000000000000000000000000000000001', { encoding: 'hex' });

        var result = await this.claimHolder.getClaim(claimId);

        assert.ok(Array.isArray(result));
        assert.equal(result.length, 6);
        assert.equal(result[0], 1);
        assert.equal(result[1], 2);
        assert.equal(result[2], accounts[0]);
        assert.equal(result[3], 1);
        assert.equal(result[4], 2);
        assert.equal(result[5], "url");
    });
});


