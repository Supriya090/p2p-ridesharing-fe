import { Route, Routes } from 'react-router-dom';
import '../App.css';
import Home from '../components/Home';
import Driver from '../components/Driver';
import Rider from '../components/Rider';
import React, { useEffect, useState } from "react"
import { rideShare,contractMethod } from "../api/rideshare"
import { ethers } from 'ethers';
import Register from '../components/register';


function App() {
  const [account, setAccount] = useState(null)
  const [isOwner, setIsOwner] = useState(null)
  const [balance, setBalance] = useState(null)
  const [status, setStatus] = useState(0)



    const connectWallet = async () => {
        await window.ethereum.request({ method: 'eth_requestAccounts' })
        const addr = window.ethereum.selectedAddress
        setAccount(addr)

        let user = await rideShare.getStatus(account);
        setStatus(user);


      // await contractMethod.mint(account,0.001);
        // const owner = await rideshare.owner()
        // if (owner.toUpperCase() === addr.toUpperCase()) {
        //     setIsOwner(true)
        // }
    }

  const mint = async (val) => {

    await contractMethod.mint(account,{value: ethers.utils.parseEther(val)});

  
  }

  const findRide = async (source,dest,amount) => {

    await contractMethod.requestRide(source,dest,amount);

  
  }

  const registerAsDriver = async (vehicle,license, phone) => {

    await contractMethod.addDriver(vehicle,license, phone);
  
  }

  const registerAsRider = async (phone) => {

    await contractMethod.joinAsRider(phone);
  
  }

  const ApproveDriver = async (vehicle, license) => {

    await contractMethod.registerDriver(vehicle, license);
  
  }

  const selectRider = async (rideId, arrivalTime) => {

    await contractMethod.selectRider(rideId, 5);
  
  }


    useEffect(() => {
      async function fetchData() {
          if (window.ethereum === undefined) {
              console.log("no wallet detected")
          }
          window.ethereum.on("accountsChanged", function account() {
              setAccount(window.ethereum.selectedAddress)
          })
      }
      fetchData();
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={
        <Home 
        registerAsDriver = {registerAsDriver}
        registerAsRider = {registerAsRider}
        ApproveDriver = {ApproveDriver}
        connectWallet = {connectWallet}
        mint = {mint}
        account = {account}
        balance = {balance}
        status = {status}
        findRide = {findRide}/>}></Route>
        <Route exact path="/driver" element={
        <Driver 
        connectWallet = {connectWallet}
        account = {account}
        balance = {balance}
        findRide = {findRide}/>}></Route>
        <Route exact path="/rider" element={
        <Rider 
        connectWallet = {connectWallet}
        account = {account}
        balance = {balance}
        findRide = {findRide}/>}></Route>
        <Route exact path="/register" element={
        <Register 
        registerAsDriver = {registerAsDriver}
        registerAsRider = {registerAsRider}
        />}></Route>
      </Routes>
    </div>
  );
}

export default App;
