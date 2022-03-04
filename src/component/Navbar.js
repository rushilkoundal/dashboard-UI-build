import React from 'react'
import './Navbar.css'
import { Avatar } from '@mui/material';

function Navbar({title}) {
    return (
        <nav className="navbar navbar-light bg-transparent">
            <div className="container">
                <span className="navbar-brand mb-0 h1">{title}</span>
                {/* <button className="btn btn-success" type="submit">Add Unit +</button> */}
                <Avatar />
            </div>
        </nav>
    )
}

export default Navbar