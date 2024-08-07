import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import './Navbar.css';

const Navbar = () => {
  const { user } = useAuthContext();
  const profileImg = user?.user?.img || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'; 
  const favImg = 'https://cdn-icons-png.flaticon.com/512/1077/1077035.png'; 

  return (
    <nav className="navbar">
      <div className="top-links">
        {!user && (
          <>
            <Link to="/login" className="navbar-link">Login</Link>
            <Link to="/signup" className="navbar-link">Signup</Link>
          </>
        )}
      </div>
      <div className="navbar-container">
        <Link to="/" className="navbar-title">
          <img className='logo-image' src='https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png' alt="Pokedex Logo" />
        </Link>
        
        {user && (
          <div className="user-links">
            <Link to="/fav" className="navbar-link">
              <img src={favImg} className="fav-icon" alt="My favs" />
            </Link>

            <Link to="/profile" className="navbar-link">
              <img src={profileImg} className="profile-icon" alt="Profile" />
            </Link>
            
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
