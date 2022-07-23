import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const AddUsers = () => {
    let navigate = useNavigate();
    const [user, setUser] = useState({

        name1: '',
        username: '',
        email: '',
        phone: '',
        website: ''
    })

    const { name1, username, email, phone, website } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3003/users", user);
        navigate("/");
    }

    return (
        <div className='container'>
            <h1>Add User</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Enter Name</label>
                    <input type="text" className="form-control" name="name1" value={name1} onChange={(e) => onInputChange(e)} />
                </div>
                <div className="form-group mt-2">
                    <label>Enter Username</label>
                    <input type="text" className="form-control" name="username" value={username} onChange={(e) => onInputChange(e)} />
                </div>
                <div className="form-group mt-2">
                    <label>Enter Email</label>
                    <input type="email" className="form-control" name="email" value={email} onChange={(e) => onInputChange(e)} />
                </div>
                <div className="form-group mt-2">
                    <label>Enter Phone</label>
                    <input type="text" className="form-control" name="phone" value={phone} onChange={(e) => onInputChange(e)} />
                </div>
                <div className="form-group mt-2">
                    <label>Enter Website</label>
                    <input type="text" className="form-control" name="website" value={website} onChange={(e) => onInputChange(e)} />
                </div>

                <button type="submit" className="btn btn-primary mt-3">Add</button>
            </form>
        </div>

    )
}

export default AddUsers