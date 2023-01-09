import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <ul className="nav nav-pills nav-fill">
            <li className="nav-item main">
                <Link to="/">Main</Link>
            </li>
            <li className="nav-item login">
                <Link to="/login">Login</Link>
            </li>
            <li className="nav-item users">
                <Link to="/users">Users</Link>
            </li>
        </ul>
    );
};

export default NavBar;
