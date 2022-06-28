import { ethers } from "ethers";

import RideArtifact from "../contracts/ABI.json";


const provider = new ethers.providers.Web3Provider(
    window.ethereum
);

// for get functions
const rideShare = new ethers.Contract(
    RideArtifact.address,
    RideArtifact.abi,
    provider
);

// for external functions
const signer = provider.getSigner()
const contractMethod = new ethers.Contract(
    RideArtifact.address,
    RideArtifact.abi,
    signer
)

export { rideShare, contractMethod };
