
const KeyHolder = artifacts.require('./KeyHolder.sol');

contract('KeyHolder', function (accounts) {
    beforeEach(async function() {
        this.keyHolder = await KeyHolder.new();
    });
    
    it('Unknown key has no purpose', async function() {
        var result = await this.keyHolder.keyHasPurpose(42, 1);

        assert.equal(result, false);
    });
});


