import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
import { useAuthContext } from '../../context/Auth_context';

const Header = () => {
    const {logOut,user} =useAuthContext()
    return (
        <div className='header'>
            <ul>
                <li><Link to="/addproduct">Add Product</Link></li>
                <li><Link to="/changepassword">Change password</Link></li>
                <li><Link to="/changeslider">changeslider</Link></li>
                <li><Link to="/addfeaturescategory">addfeaturescategory</Link></li>
                <li><Link to="/featurescategories">featurescategories</Link></li>
                <li><Link to="/orders">orders</Link></li>
                <li><button onClick={logOut}>logout</button></li>
               
               
            </ul>
           
        </div>
    );
};

export default Header;