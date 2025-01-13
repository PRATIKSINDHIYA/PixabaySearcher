import React, { useState, useEffect, useRef, useContext } from 'react';
import ImageContext from '../context/ImageContext';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const { Fetchimagebycategory, setQuery } = useContext(ImageContext);

  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        setShowNavbar(true);
      } 
      // else if (scrollTop <= 10) {
      //   setShowNavbar(false);
      // }
      setLastScrollTop(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  

  return (
    <div className='mainheader'>
      <nav className={`firstnav ${showNavbar ? 'show' : ''}`}>
        <div className='seconddiv'>
          <div className="logo">
            <img src="/public/logo.svg" alt="" />
          </div>
          <div className="searchbar">
            <div className="searchimg">
              <img src="/public/search.svg" alt="" />
            </div>
            <div className="input">
              <input 
                onChange={(e) => setQuery(e.target.value)} 
                type="text" 
                name="" 
                id="" 
                placeholder='Search Pixabay' 
              />
            </div>
          </div>
          <div className="butn">
            <button onClick={() => Fetchimagebycategory("nature")}>Nature</button>
            <button onClick={() => Fetchimagebycategory("fashion")}>Fashion</button>
            <button onClick={() => Fetchimagebycategory("music")}>Music</button>
            <button onClick={() => Fetchimagebycategory("sports")}>Sports</button>
            <button onClick={() => Fetchimagebycategory("animals")}>Animals</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
