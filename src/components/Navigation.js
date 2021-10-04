import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

function Navigation() {
    return <div className="navigation">
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
        </ul>
    </div>
}

export default Navigation;