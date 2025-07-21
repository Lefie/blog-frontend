import './DisplayBlog.css'
import { AuthContext } from '../../context/AuthContext'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { BlogInfo } from '../../components/BlogInfoList/BlogInfo'

export const DisplayBlog = () => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()

    if(user){
        return <>
        <BlogInfo />
        </>
    }else{
        return <>
        <BlogInfo />
        </>
    } 
}
