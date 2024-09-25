import React from "react";
import './Home.css'
import { Button } from "../../components/Button/Button";
import { Link } from 'react-router-dom';

export const Home = () => {

    return (
       <>            
       <div className='yellow-bar-top'> </div>
        <div className='yellow-bar-bottom'></div>
    
        <div className="blog-name">
        <h1 className='title'>Blog</h1> 
        <p className='slogan'>Blog about anything</p>
        </div>
    
        <div className='btns'>
            <Button name={"Login"} />
            <Button name={"Sign Up"} />
            <Link to="/blogs"> <Button name={"Read"}  /> </Link>
        </div>
        </>
    )
}