import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {
    Link
} from "react-router-dom";

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);


    const loadUsers = async () => {
        const results = await axios.get('http://localhost:3003/users');
        setUsers(results.data.reverse())
    }

    const deleteUser = async id => {
       await axios.delete(`http://localhost:3003/users/${id}`);
       loadUsers();
    }

    return (
        <div className='container'>
            <h1>Home Page</h1>

            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => (
                            <tr key={user.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{user.name1}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link to={`/user/view/${user.id}`} className="btn btn-primary ml-1">View</Link>
                                    <Link to={`/user/edit/${user.id}`} className="btn btn-success ml-1">Edit</Link>
                                    <Link  to="" onClick={() => deleteUser(user.id)} className="btn btn-danger mr-1">Delete</Link>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Home