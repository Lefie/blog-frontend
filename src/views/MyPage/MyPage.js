import "./MyPage.css"
import { AuthContext } from '../../context/AuthContext';
import { useContext, useEffect } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { useNavigate, Link } from "react-router-dom";
import { Box, Text, Spacer, Button } from "@chakra-ui/react";
import { useState } from "react";
import { myBlogs } from "../../utils/my_blogs";
import { SingleBlog } from "../../components/SingleBlog/SingleBlog";

function MyPage() {

    // TODO : limit the number of blogs to just 3. after that, add 'More' to see more
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const [blogs, setBlogs] = useState(null)

    useEffect(()=>{
        async function fetchData(){
            const all_blogs = await myBlogs()
            setBlogs(all_blogs)
        }

        fetchData()
       
    },[])

    useEffect(()=>{
        if(!user){
            navigate('/')
        }

    },[user])

    // Function to remove a blog from the list after deletion
    const handleDeleteBlog = (deletedBlogId) => {
        setBlogs((prevBlogs) => prevBlogs.filter(blog => blog._id !== deletedBlogId));
    };

    if(user){
        return <>
            <Navbar page='loggedin'/>
            <Text fontSize='3xl' align='center'>  Welcome {user.username} !</Text>
            <Box
            display='flex'
            border = '1px' 
            pl={2}
            width='100%'
            >
                
                <Text align='center' width='50%' border='1px'>
                   <h3>My Blogs</h3>
                    { blogs && blogs.map(blog => (
                       <>                
                        <SingleBlog 
                        key={blog._id}
                        blog={blog}
                        page="mypage"
                        onDelete={handleDeleteBlog}
                         />
                      </>
                    ))
                }
                </Text>
            
                <Spacer />
                <Text h={8} border='1px' pr='12'>
                    Write a new blog "icon"
                </Text>
            </Box>

        </>
    }
}

export default MyPage;