import React from 'react'
import {
    Link
  } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg  navbar-light">
            <div className="container">
                <a className="navbar-brand" href="/">React App</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse  float-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav float-end">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/user/add" className="btn btn-primary">Add User</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar