import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
import './Header.css';

const Header = () => {
    return (
        <div className="nav">
            <Link to="/" className="main-item">
                ReactReads
            </Link>
            <div className="right-menu">
                <Link to="/read" className="item">
                    BooksRead
                </Link>
                <Link to="/reading" className="item">
                    Currently read books
                </Link>
                <Link to="/toread" className="item">
                    Books to read
                </Link>
                <Link to="/managestore" className="item">
                    Add book
                </Link>
                <GoogleAuth className="item"/>
            </div>
        </div>
    );
}

export default Header;