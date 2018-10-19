pragma solidity ^0.4.24;

contract ClaimHolder {
    function getClaim(bytes32 _claimId) 
        public 
        constant 
        returns(
            uint256 claimType,
            uint256 scheme,
            address issuer,
            bytes signature,
            bytes data,
            string uri
        ) {
        return (0, 0, address(0), new bytes(0), new bytes(0), "");
    }
}

