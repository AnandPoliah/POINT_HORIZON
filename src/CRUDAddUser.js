import React, { useState } from 'react';
import axios from 'axios';
import './CRUDAddUser.css';

const CRUDAddUser = ({ fetchData }) => {
  const [newUser, setNewUser] = useState({ username: '', password: '' });

  const handleInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleAddUser = async () => {
    // Check if username or password is empty
    if (!newUser.username || !newUser.password) {
      alert('Username and password cannot be empty');
      return;
    }
  
    try {
      // Fetch existing users
      const response = await axios.get('http://localhost:9000/getuser');
      const existingUsers = response.data;
  
      // Check if user already exists
      if (existingUsers.some(user => user.username === newUser.username)) {
        alert('User already exists');
        return;
      }
  
      // Add user if not already exists
      await axios.post('http://localhost:9000/saveuser', newUser);
      setNewUser({ username: '', password: '' });
      alert(`User added successfully with password: ${newUser.password}`);
      fetchData(); // Fetch updated data after adding user
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <div className="centered-wrapper">
      <div className="card card-body">
        <h2><b>ADD USER</b></h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={newUser.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={newUser.password}
            onChange={handleInputChange}
          />
        </div>
        <button className="btn btn-primary" onClick={handleAddUser}>Add User</button>
      </div>
    </div>
  );
};

export default CRUDAddUser;
