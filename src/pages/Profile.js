import React from 'react'
import { useAuthContext } from '../hooks/useAuthContext';
import './Profile.css'

export default function Profile() {
    const { user } = useAuthContext();
  return (
    <div className="profile-container">
    <div className="profile-card">
      <img className="profile-photo" src="pokedex\public\polar_bear.png" alt="Profile" />
      <h2>{user?.user?.email}</h2>
      <button className="edit-button">Edit Profile</button>
    </div>
  </div>
  )
}
