import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import ListaCampeoes from './pages/ListaCampeoes/ListaCampeoes';
import Classificacao from './pages/Classificacao/Classificacao';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/champions" element = {<ListaCampeoes/>} />
            <Route path = "/classification" element = {<Classificacao/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
