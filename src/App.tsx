import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { HomePage } from './pages/home/HomePage';
import SignUpPage from './pages/signup/SignUp';
import ProductPage from './pages/products/ProductPage';
import AboutPage from './pages/about/AboutPage';
import PricingPage from './pages/pricing/PricingPage';
import SupportPage from './pages/support/SupportPage';

function App() {
  return (    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/open-account" element={ <SignUpPage /> } />
        <Route path="/product" element={ <ProductPage /> } />
        <Route path="/about" element={ <AboutPage /> } />
        <Route path="/pricing" element={ <PricingPage /> } />
        <Route path="/support" element={ <SupportPage /> } />        
        </Routes>
      </BrowserRouter>
  )
}

export default App
