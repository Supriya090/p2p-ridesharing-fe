import { Route, Routes } from 'react-router-dom';
import '../App.css';
import Main from '../components/Main';
import { StoreContext } from './../hooks/useStore';
import React, { useEffect, useReducer } from "react"
import { getBalance } from './../api/ride';

const initialState = {
  pickUp: null,
  dropOff: null,
  account: null,
  RIDEbalance: null,
};

function App() {
  const [state, dispatch] = useReducer((state, action) => {
    const { type, payload } = action;
    switch (type) {
      case 'SET_PICKUP_LOCATION':
        return {
          ...state,
          pickUp: payload
        }
      case 'SET_DROP_LOCATION':
        return {
          ...state,
          dropOff: payload
        }
      case 'SET_ACCOUNT':
        return {
          ...state,
          account: payload
        }
      case 'SET_RIDE_BALANCE':
        return {
          ...state,
          RIDEbalance: payload
        }
      default:
        return state;
    }
  }, initialState);

  const connectWallet = async () => {
    await window.ethereum.request({ method: 'eth_requestAccounts' })
    const addr = window.ethereum.selectedAddress
    dispatch({ type: 'SET_ACCOUNT', payload: addr })

    if (addr) {
      const balance = await getBalance(addr)
      console.log("bal",balance);
      dispatch({ type: 'SET_RIDE_BALANCE', payload: balance })
    }

  }

  useEffect(() => {
    async function fetchData() {
      if (window.ethereum === undefined) {
        alert("no wallet detected")
      }
      window.ethereum.on("accountsChanged", function account() {
        dispatch({ type: 'SET_ACCOUNT', payload: window.ethereum.selectedAddress })
      })
    }
    fetchData();
  }, [])

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Main
            connectWallet={connectWallet} />}
          ></Route>
        </Routes>
      </div>
    </StoreContext.Provider>
  );
}
export default App;
