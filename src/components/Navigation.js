import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

function Navigation() {
    return <div className="navBar">
        <div className="navBar__logo">
            Movie App
        </div>

        <div className="navBar__navigation">
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
            </ul>
        </div>

        <div className="navBar__icon">
        </div>
    </div>
}

export default Navigation;