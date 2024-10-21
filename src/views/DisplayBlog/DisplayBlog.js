import './DisplayBlog.css'
import { Navbar } from '../../components/Navbar/Navbar'
import { AuthContext } from '../../context/AuthContext'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { BlogInfo } from '../../components/BlogInfoList/BlogInfo'

export const DisplayBlog = () => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()

    if(user){
        return <>
        <Navbar page="loggedin" />
        <BlogInfo />
        </>
    }else{
        return <>
        <Navbar page="not_logged_in" />
        <BlogInfo />
        </>
    }

  
        
    
}
