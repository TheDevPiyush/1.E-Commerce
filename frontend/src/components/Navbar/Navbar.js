import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();
    const [currentPath, setCurrentPath] = useState('');

    useEffect(() => {
        const path = location.pathname === '/' ? 'home' : location.pathname.substring(1);
        setCurrentPath(path);
    }, [location]);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">E-Commerce</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className={`nav-link ${currentPath === 'home' ? 'active' : ''}`} aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to="#" className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Explore
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link to="/men" className="dropdown-item">Men's Wear</Link></li>
                                    <li><Link to="/women" className="dropdown-item">Women's Wear</Link></li>
                                    <li><Link to="/kids" className="dropdown-item">Kid's Wear</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to='/cart' className={`nav-link ${currentPath === 'cart' ? 'active' : ''}`}>
                                    Your Cart 🛒
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
