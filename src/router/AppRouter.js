import { Route, Routes } from 'react-router-dom';
import { useReducer } from 'react';
import '../App.css';
import Main from '../components/Main';
import { StoreContext } from './../hooks/useStore';

const initialState = {
  pickUp: null,
  dropOff: null,
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
        default:
          return state;
      }
    }, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
      </Routes>
    </div>
    </StoreContext.Provider>
  );
}

export default App;
