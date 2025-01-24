import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <nav className='light-blue darken-4'>
        <div className='container'>
          <div className='nav-wrapper'>
            <Link to='/' className='brand-logo'>
              MY CV
            </Link>
            <a href='#' data-target='side-nav' className='sidenav-trigger' onClick={handleSidebarToggle}>
              <i className='material-icons'>menu</i>
            </a>
            <ul className='right hide-on-med-and-down'>
              <li>
                <Link to='/' onClick={handleSidebarClose}>
                  <i className='fas fa-home'></i> Home
                </Link>
              </li>
              <li>
                <Link to='/skills' onClick={handleSidebarClose}>
                  <i className='fas fa-copy'></i> Skills
                </Link>
              </li>
              <li>
                <Link to='/experiences' onClick={handleSidebarClose}>
                  <i className='fas fa-id-badge'></i> Experiences
                </Link>
              </li>
              <li>
                <Link to='/educations' onClick={handleSidebarClose}>
                  <i className='fas fa-graduation-cap'></i> Educations
                </Link>
              </li>
              <li>
                <Link to='/contact' onClick={handleSidebarClose}>
                  <i className='fas fa-address-card'></i> Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <ul className={`sidenav ${isSidebarOpen ? 'open' : ''}`} id='side-nav'>
        <li>
          <Link to='/' onClick={handleSidebarClose}>
            <i className='fas fa-home'></i> Home
          </Link>
        </li>
        <li>
          <Link to='/skills' onClick={handleSidebarClose}>
            <i className='fas fa-copy'></i> Skills
          </Link>
        </li>
        <li>
          <Link to='/experiences' onClick={handleSidebarClose}>
            <i className='fas fa-id-badge'></i> Experiences
          </Link>
        </li>
        <li>
          <Link to='/educations' onClick={handleSidebarClose}>
            <i className='fas fa-graduation-cap'></i> Educations
          </Link>
        </li>
        <li>
          <Link to='/contact' onClick={handleSidebarClose}>
            <i className='fas fa-address-card'></i> Contact
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Navbar;