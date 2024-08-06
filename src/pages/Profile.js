import React from 'react'
import { useAuthContext } from '../hooks/useAuthContext';
import './Profile.css'

export default function Profile() {
    const { user } = useAuthContext();
  return (
    <div className="profile-container">
    <div className="profile-card">
      <h2>Welcome {user?.user?.email} !</h2>
      <button className="edit-button">Add pokemon</button>
    </div>
  </div>
  )
}
