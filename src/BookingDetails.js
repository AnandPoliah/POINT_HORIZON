import React from 'react';
import './BookingDetails.css';
import {UserContext} from './context';

const BusDetails = () => 
{
 
  const {user}=useContext(UserContext); 
  
  return (
    <div className="bus-details-container">
      <h2>Bus Details</h2>
      <div className="details">
        <p><strong>Bus Name:</strong> {user.busName}</p>
      </div>
    </div>
  );
};

export default BusDetails;
