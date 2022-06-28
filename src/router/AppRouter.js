import { Route, Routes } from 'react-router-dom';
import '../App.css';
import Home from '../components/Home';
import React, { useEffect, useState } from "react"

function App() {
  const [account, setAccount] = useState(null)
    const [isOwner, setIsOwner] = useState(null)

    const connectWallet = async () => {
        await window.ethereum.request({ method: 'eth_requestAccounts' })
        const addr = window.ethereum.selectedAddress
        setAccount(addr)
        // const owner = await rideshare.owner()
        // if (owner.toUpperCase() === addr.toUpperCase()) {
        //     setIsOwner(true)
        // }
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
        account = {account}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
