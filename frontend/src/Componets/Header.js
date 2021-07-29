import React from 'react'
import {Link} from 'react-router-dom';
export default function Header() {
    return (
        <div className="container-fluid py-3 navbar text-light bg-dark ">
                <a className="navbar-brand" href="/">Logo</a>
            <div className="d-flex flex-row justify-content-center align-items-center">
                
            </div>
            <Link to="/admin" className="nav-link">Login</Link>
        </div>
    )
}
