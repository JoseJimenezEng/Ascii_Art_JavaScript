import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <header>
        <div class="header">
            <div class="logo">
                <div class="content">
                    <span>&gt;_ ASCII Art</span>
                </div>
            </div>
            <div class="elements">
                <div class="content">
                    <span>Home</span><span>Gallery</span><span>About</span>
                </div>
            </div>
        </div>
    </header>
  );
};

export default Navbar;
