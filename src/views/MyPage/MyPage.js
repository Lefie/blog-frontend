import "./MyPage.css"
import { AuthContext } from '../../context/AuthContext';
import { useContext, useEffect } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { useNavigate, Link } from "react-router-dom";
import { Box, Text, Spacer, Center,Flex,Wrap, Button, WrapItem } from "@chakra-ui/react";
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
            pl={2}
            width='100%'
            >
                
                <Text 
                align='center' 
                width='100%'
                height='full'
                marginTop='10px'
                marginLeft='15px'
                marginBottom='15px'
                 >
                   
                   <Center>
                        <Flex 
                        gap='5' 
                        wrap='wrap'
                        justify='center'
                        >   
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
                            </Flex>
                    </Center>
                </Text>
            </Box>
        </>
    }
}

export default MyPage;