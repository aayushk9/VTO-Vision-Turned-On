import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import "./Navbar.css";    
  
const Navbar = () => {
  return (
    <nav>
      
        <div className="left-section">
          <h1 className="brand">VTO</h1>
        </div>
        
        <div className="right-section">
        <ul className="nav-links">
        <li className="nav-link"><a href="/about">about</a></li>
        <li className="nav-link"><a href="/docs">docs</a></li>              
      </ul>     
        </div>
       
    </nav>
  )
}

export default Navbar;  