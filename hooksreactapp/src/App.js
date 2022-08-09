//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import Products from './components/Products';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hookcheck from './components/Hookcheck';

function App() {
  return (
    <div className="App">
     <Navbar/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/contactus' element={<ContactUs/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/hookcheck' element={<Hookcheck/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
