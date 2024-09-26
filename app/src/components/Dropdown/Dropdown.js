
import React from "react";
import './Dropdown.css'
import { Link } from "react-router-dom";

export const DropDown = () => {

    return (
        <div className="dropdown">
            <div className="nav">
            <p>Nav</p>
            <Link to="/blogs"><p>Blogs</p></Link>          
            </div>
           
        </div>
    )
}