import PokemonList from './pages/Pokelist/PokeList'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PokemonDetail from './pages/Pokedetail/Pokedetails'
import Login from './pages/Login'
import Signup from './pages/Signup.js'
import Navbar from './components/Navbar.js'
import Profile from './pages/Profile.js'
import Fav from './pages/Fav.js'

function App() {

  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<PokemonList/>} />
          <Route path="/pokemon/:name" element={<PokemonDetail />} />
          <Route path = "/login" element={<Login/>}/>
          <Route path = "/signup" element={<Signup/>}/>
          <Route path="/profile" element={<Profile/>} />
          <Route path="/fav" element={<Fav/>} />
        </Routes>
      
    </Router>
  );
}

export default App;
