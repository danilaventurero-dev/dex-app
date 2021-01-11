import React from 'react';
import {  NavLink as Link} from "react-router-dom";
import {Nav} from 'reactstrap';

const Menu = () => {
    return (
        <div>
            <h4 >NAVEGACION</h4>
            <Nav className="flex-column nav">
            <li className="nav-item">
            <Link className='' to='/' >Home</Link>
            </li> 
            <li className="nav-item">
            <Link className='' to='/sendMessage' >SendMessage</Link>
            </li> 
            </Nav>
        </div>
    );
};

export default Menu;