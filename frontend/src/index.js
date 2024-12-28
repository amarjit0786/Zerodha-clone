import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import HomePage from './Landing_Page/home/HomePage';
import Signup from './Landing_Page/signup/Signup';
import Login from './Landing_Page/login/Login';
import AboutPage from './Landing_Page/about/AboutPage';
import ProductPage from './Landing_Page/products/ProductPage';
import PricingPage from './Landing_Page/pricing/PricingPage';
import SupportPage from './Landing_Page/support/SupportPage';
import Navbar from './Landing_Page/Navbar';
import Footer from './Landing_Page/Footer';
import NotFound from './Landing_Page/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Navbar />
 <Routes>
  <Route path='/' element={<HomePage />} />
  <Route path='/signup' element={<Signup />} />
  <Route path='/login' element={<Login />} />
  <Route path='/about' element={<AboutPage />} />
  <Route path='/product' element={<ProductPage />} />
  <Route path='/pricing' element={<PricingPage />} />
  <Route path='/support' element={<SupportPage />} />
  <Route path='*' element={<NotFound />} />
 </Routes>
 <Footer />
 </BrowserRouter>
);


