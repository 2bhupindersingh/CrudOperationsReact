import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const ViewUsers = () => {
    let navigate = useNavigate();
    const { id } = useParams();
    const [user, setUser] = useState({

        name1: '',
        username: '',
        email: '',
        phone: '',
        website: ''
    });

    useEffect(() => {
        loadUser();
    }, [])

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data)
    }
  return (
    <div className='container'>
        <h2>User Name : {user.name1}</h2>
        <ul>
            <li>Name: {user.name1}</li>
            <li>User Name: {user.username}</li>
            <li>Email: {user.email}</li>
        </ul>
    </div>
  )
}

export default ViewUsers