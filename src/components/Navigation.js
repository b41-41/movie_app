import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

function Navigation() {
    return <div className="navBar">
        <div className="navBar__logo">
            <Link to="/">Movie App</Link>
        </div>

        <div className="navBar__navigation">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </div>

        <div className="navBar__icon">
        </div>
    </div>
}

export default Navigation;