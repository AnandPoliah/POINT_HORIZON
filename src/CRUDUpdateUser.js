import React, { useState } from 'react';
import axios from 'axios';
import './CRUDAddUser.css'; // Import AddUser.css for styling

const CRUDUpdateUser = () => {
  const [username, setUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleUpdatePassword = async () => {
    try {
      const response = await axios.put(`http://localhost:9000/updateuser/${username}`, { newPassword });
      setMessage(response.data);
    } catch (error) {
      console.error('Error updating password:', error);
      setMessage('Error updating password. Please try again.');
    }
  };

  return (
    <div className="card"> {/* Use the 'card' class for styling */}
      <h2>Update Password</h2>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="newPassword">New Password</label>
        <input
          type="password"
          className="form-control"
          id="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleUpdatePassword}>Update Password</button>
      {message && <div className="message">{message}</div>}
    </div>
  );
};

export default CRUDUpdateUser;
