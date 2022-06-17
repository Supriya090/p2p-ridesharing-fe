import { Route, Routes } from 'react-router-dom';
import '../App.css';
import Home from '../components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
