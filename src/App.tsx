import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { HomePage } from './pages/home/HomePage';
import SignUpPage from './pages/signup/SignUp';
import ProductPage from './pages/products/ProductPage';
import AboutPage from './pages/about/AboutPage';
import PricingPage from './pages/pricing/PricingPage';
import SupportPage from './pages/support/SupportPage';
import { Navbar } from './pages/Navbar';
import Footer from './pages/Footer';
import { NotFound } from './pages/NotFound';

function App() {
  return (    
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index path="/" element={ <HomePage /> } />
          <Route path="/open-account" element={ <SignUpPage /> } />
          <Route path="/product" element={ <ProductPage /> } />
          <Route path="/about" element={ <AboutPage /> } />
          <Route path="/pricing" element={ <PricingPage /> } />
          <Route path="/support" element={ <SupportPage /> } />  
          <Route path="*" element={ <NotFound /> } />       
        {/* </ Route> */}
        </Routes>
        <Footer/>
      </BrowserRouter>
  )
}

export default App
