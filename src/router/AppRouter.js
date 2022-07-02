import { Route, Routes } from 'react-router-dom';
import '../App.css';
import Main from '../components/Main';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
      </Routes>
    </div>
  );
}

export default App;
