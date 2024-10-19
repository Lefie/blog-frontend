import "./MyPage.css"
import { AuthContext } from '../../context/AuthContext';
import { useContext, useEffect } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { Box, Text, Spacer, Button } from "@chakra-ui/react";
import { useState } from "react";
import { myBlogs } from "../../utils/my_blogs";

function MyPage() {

    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const [blogs, setBlogs] = useState(null)

    useEffect(()=>{
        if(!user){
            navigate("/")
        }
    })

    useEffect(()=>{
        async function fetchData(){
            const all_blogs = await myBlogs()
            setBlogs(all_blogs)
        }

        fetchData()
       
    },[])


    const handleClick = async() => {
        const response = await fetch("http://localhost:5050/users/session",{
            method : 'GET',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'}
        })
        console.log("here")

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const res = await response.json()
        console.log(res)
    }

    
    const View = () => {
        if(user){
            return <>
            
                <h1>Welcome {user.username} !</h1>
                <Box
                display='flex'
                border = '1px'
                >
                    
                    <Text border='1px'>
                        My Blogs
                        { blogs && blogs.map(blog => (
                           <>
                            <li onClick={()=>{navigate('/blogs/mypage/123')}} >{blog.title} {blog.date}  </li>
                            <button>Edit</button> 
                            </>
                        ))
                    }
                    </Text>

                    <Spacer />

                    <Text border='1px' pr='12'>
                        Write a new blog "icon"
                    </Text>

                </Box>
                <Button onClick={handleClick} >Test Session</Button>
               
            </>
        }
    }
    return (
        <>
        <Navbar page='loggedin'/>
        <View />
        </>
    )
}

export default MyPage;