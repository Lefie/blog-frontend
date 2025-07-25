import './CreateBlog.css'
import { AuthContext } from '../../context/AuthContext'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { WriteBlogForm } from '../../components/WriteBlogForm/WriteBlogForm'


export const CreateBlog = () => {

    const {user} = useContext(AuthContext)
    console.log(user, "coming from create blog")
    const navigate = useNavigate()

    useEffect(()=>{
        if(!user){
            navigate('/')
        }

    },[user])

    if(user){
        return <>
        <WriteBlogForm />
        </>
    }

}