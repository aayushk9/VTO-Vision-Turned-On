import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Image from './components/Image';
import About from './components/About';
import Imagedisplay  from './components/Imagedisplay';
import Main from './components/Main';
import { useState } from 'react';

function App() {
  const [originalImage, setOriginalImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [activeNavItem, setActiveNavItem] = useState(null);    

  const handleNavbarItemClick = (item) => {
    setActiveNavItem(item);  
  };

  const handleImageUpload = (image) => {
    // Handle image upload logic here
    console.log('Image uploaded:', image);
  };

    return (  
      <Router>
        <div>
          <Navbar />
          <Routes> {/* Wrap your routes in a <Routes> component */}
            <Route path="/" element={<Main />} />   
            <Route path="/about" element={<About />} />   
          </Routes>
        </div>   
        <br />
        <br />   
        <Image onImageUpload={handleImageUpload} />  
      </Router>
    );
}

export default App;
