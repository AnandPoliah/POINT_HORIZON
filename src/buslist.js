import React,{useContext, useState} from 'react';
import './buslist.css';
import NavBar from './header_for_everything'
import { Link } from 'react-router-dom';
import {UserContext} from './context';
import Buslistapi from './buslistapi';


function BusList() {
     const {user}=useContext(UserContext);
  return (
    <div >
          <NavBar />
          <div className='highhead'>
          <div>From: {user.from}</div>
          <div>To: {user.to}</div>
          <div>Date: {user.date}</div>
          </div>
        <Buslistapi dater={user.date}/>
                                        
    </div>
  );
}

export default BusList;