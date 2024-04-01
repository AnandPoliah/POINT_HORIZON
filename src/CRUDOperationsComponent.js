import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Maintain.css';

const TestManagement = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:9000/getuser');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleDeleteUser = async (username) => {
        try {
            await axios.delete(`http://localhost:9000/deletebyname/${username}`);
            fetchData(); // Fetch updated data after deleting user
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-10">
                    <div className="clearfix"><br /></div>
                    <div className="card ">
                        <button className='button63'><Link to={{ pathname: '/adduser' }}>ADD USER</Link></button>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Username</th>
                                    <th scope="col">Password</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(user => (
                                    <tr key={user.id}>
                                        <td>{user.username}</td>
                                        <td>{user.password}</td>
                                        <td>
                                            <button onClick={() => handleDeleteUser(user.username)} className='button63'>Delete</button>
                                            <button className='button63'><Link to={{ pathname: '/updateuser', state: { user } }}>Update</Link></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestManagement;
