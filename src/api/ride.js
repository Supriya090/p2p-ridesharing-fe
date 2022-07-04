import { rideShare, contractMethod } from "./rideshare"
import { ethers } from 'ethers';

export const mintRIDE = async (account, amount) => {
    const success = await contractMethod.mint(account, amount);
    if (success) {
        return true;
    } else {
        return false;
    }
}

export const isOwner = async (account) => {
    const owner = await rideShare.owner()
    if (owner.toUpperCase() === account.toUpperCase()) {
        return true;
    } else {
        return false;
    }
}

export const getBalance = async (account) => {
    var balance = await rideShare.balanceOf(account)
    return ethers.utils.formatEther(balance)
}

export const findRide = async (account) => {
    const ride = await contractMethod.mint(account, { value: ethers.utils.parseEther("0.001") });
    if(ride) {
        return true
    }
    else {
        return false
    }
}