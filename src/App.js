import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <h1>React router</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path = "/" element = {<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
