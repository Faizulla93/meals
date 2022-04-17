import './navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = ()=>{
    return (
        <div>
            <div className="navbar">
            <div className="menu">
                <div className="logo">Logo</div>
                <ul className="menu-group">
                    <li className="menu-item">
                      <Link to="/">All meals</Link>         
                    </li>
                    <li className="menu-item">
                    <Link to="/hot-dishes">Hot dishes</Link>
                    </li>
                    <li className="menu-item">
                     <Link to="/soups">Soups</Link>
                    </li>
                    <li className="menu-item">
                    <Link to="/salads">Salads</Link>
                    </li>
                    <li className="menu-item">
                    <Link to="/desserts">Desserts</Link>
                    </li>
                    <li className="menu-item">
                    <Link to="/cart">
                    <i className="bi bi-basket-fill"></i>
                    </Link>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Navbar;