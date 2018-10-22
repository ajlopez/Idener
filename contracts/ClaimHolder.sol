pragma solidity ^0.4.24;

contract ClaimHolder {
    struct Claim {
        uint256 topic;
        uint256 scheme;
        address issuer; // msg.sender
        bytes signature; // this.address + claimType + data
        bytes data;
        string uri;
    }
    
    mapping(bytes32 => Claim) claims;
    
    function getClaim(bytes32 _claimId) 
        public 
        constant 
        returns(
            uint256 topic,
            uint256 scheme,
            address issuer,
            bytes signature,
            bytes data,
            string uri
        ) {
        Claim storage claim = claims[_claimId];
        
        return (claim.topic, claim.scheme, claim.issuer, claim.signature, claim.data, claim.uri);
    }
    
    function addClaim(
        uint256 _topic, 
        uint256 _scheme, 
        address _issuer, 
        bytes _signature, 
        bytes _data, 
        string _uri) returns (bytes32 claimRequestId) {
        
        bytes32 claimId = keccak256(abi.encodePacked(_issuer, _topic));
        
        claims[claimId] = Claim(_topic, _scheme, _issuer, _signature, _data, _uri);
        
        return claimId;
    }
}

