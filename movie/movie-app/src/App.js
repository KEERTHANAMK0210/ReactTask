import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import TrendingMovies from './TrendingMovies';
import MovieCategories from './MovieCategories';
import HeroSection from './HeroSection';
import CustomNavbar from './CustomNavbar';



const App = () => {
  return (
    <BrowserRouter>
    <CustomNavbar/>
    <Routes>
    

      {/* <Route path="/" element={<CustomNavbar/>} /> */}
      <Route path="/trending" element={<TrendingMovies/>} />
      <Route path="/categories" element={<MovieCategories/>} />
      <Route path="/hero" element={<HeroSection/>} />






    </Routes>
    
    </BrowserRouter>
    
  );
};

export default App;

