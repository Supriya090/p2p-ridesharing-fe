import { Route, Routes } from 'react-router-dom';
import '../App.css';
import Home from '../components/Home';
import Location from '../components/Location';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/location" element={<Location />}></Route>
      </Routes>
    </div>
  );
}

export default App;
