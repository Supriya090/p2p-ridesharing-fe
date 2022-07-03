import { Route, Routes } from 'react-router-dom';
import '../App.css';
import Home from '../components/Home';
import Driver from '../components/Driver';
import Rider from '../components/Rider';
import React, { useEffect, useState } from "react"
import { rideShare,contractMethod } from "../api/rideshare"
import { ethers } from 'ethers';


function App() {
  const [account, setAccount] = useState(null)
  const [isOwner, setIsOwner] = useState(null)
  const [balance, setBalance] = useState(null)



    const connectWallet = async () => {
        await window.ethereum.request({ method: 'eth_requestAccounts' })
        const addr = window.ethereum.selectedAddress
        setAccount(addr)

      //   if (account!= null) {
      //     let balance = await rideShare.balanceOf("0x48d1027660e33dad39476ca0781078a868e62e83")
      //     setBalance(balance)
      //     console.log(balance)
      // }

      await contractMethod.mint(account,0.001);
        // const owner = await rideshare.owner()
        // if (owner.toUpperCase() === addr.toUpperCase()) {
        //     setIsOwner(true)
        // }
    }

    const findRide = async () => {

    await contractMethod.mint(account,{value: ethers.utils.parseEther("0.001")});
  
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
        connectWallet = {connectWallet}
        account = {account}
        balance = {balance}
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
      </Routes>
    </div>
  );
}

export default App;
