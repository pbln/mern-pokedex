import React from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import './Navbar.css';

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleLogout = () => {
    logout();
  };

  const profileImg = user?.user?.img || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'; // Default profile icon CDN link
  const favImg = 'https://cdn-icons-png.flaticon.com/512/1077/1077035.png'; // Default favorite icon CDN link

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-title">
          Pokedex
        </Link>
        
        <nav>
          {user && (
            <div>
              <Link to="/fav" className="navbar-link">
                <img src={favImg} className="fav-icon" alt="My favs" />
              </Link>

              <Link to="/profile" className="navbar-link">
                <img src={profileImg} className="profile-icon" alt="Profile" />
              </Link>
              <button className="nav-button" onClick={handleLogout}>Logout</button>
            </div>
          )}
        </nav>
        
        {!user && (
          <div className="navbar-links">
            <Link to="/login" className="navbar-link">Login</Link>
            <Link to="/signup" className="navbar-link">Signup</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
