import './App.css';
import Navbar from './components/navbar/Navbar';
import Express from './routes/express/Express';
import Home from './routes/home/Home';
import Footer from './components/footer/Footer';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/express' element={<Express/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
