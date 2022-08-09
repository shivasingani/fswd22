//import logo from './logo.svg';
import './App.css';
//import AboutUs from './components/AboutUs';
//import ContactUs from './components/ContactUs';
//import Home from './components/Home';
import {Home, AboutUs, ContactUs, ITHome,PageNotFound,GetOrder,OrderQuery} from './components/Allinone';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <h1> Welcome to Routing Page! </h1>
      <Router>
        <Routes>
          <Route  path='/' element={<Home/>}/> {/* when path contains just / show Home component */}
          <Route  path='/home' element={<Home/>}/>
          <Route  path='/aboutus' element={<AboutUs/>}/>
          <Route  path='/contact' element={<ContactUs/>}/>
          <Route  path='/it/home' element={<ITHome/>}/>
          <Route  path='/GetOrder/:orderId/:name' element={<GetOrder/>}/>

          <Route  path='/OrderQuery' element={<OrderQuery/>}/>


          <Route  path='*' element={<PageNotFound/>}/>
        </Routes>
      </Router>  
    </div>
  );
}

export default App;
