import "./MyPage.css"
import { AuthContext } from '../../context/AuthContext';
import { useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Box, Text, Spacer, Center,Flex,Wrap, Button, WrapItem } from "@chakra-ui/react";
import { useState } from "react";
import { SingleBlog } from "../../components/SingleBlog/SingleBlog";
import { myBlogsPaginated } from "../../utils/my_blogs_paginated";
import { Error } from "../../components/Error/Error";
import { PageNav } from "../../components/PageNav/PageNav";

function MyPage() {

    const { user } = useContext(AuthContext)
    console.log(user)
    const navigate = useNavigate()

    const [blogs, setBlogs] = useState({
        "blogs":[],
        "curPageNum":1,
        "isNextPage":false,
        "isPrevPage":false,
        "totalPageNum":0
    })

    const [pageNumber, setPageNumber] = useState()
    const [error, setError] = useState({
        "errorType":"",
        "errorMsg":""
    })

    

    

    useEffect(()=>{
        if(!user){
            navigate('/')
        }

    },[user])

    useEffect(()=>{
        console.log("initial load")
        getMyBlogsByPageNum(1)
    },[])

    useEffect(()=>{
    if (error && error.errorType !== "" && error.errorMsg !== ""){
        setTimeout(()=>{
            setError(prev => ({
                ...prev, 
                "errorType":"",
                "errorMsg":""
            }))
        }, 5000)
    }
    },[error])


    async function getMyBlogsByPageNum(pageNum){
        const results = await myBlogsPaginated(pageNum)
        console.log(results)
        setBlogs(prev => ({
            ...prev,
            "blogs":results.blog_data,
            "curPageNum":pageNum,
            "isNextPage":results.pagination.hasNextPage,
            "isPrevPage":results.pagination.hasPrevPage,
            "totalPageNum":results.pagination.totalPages
        }))

    }

    function handlePageNumber(pn){
        console.log("handlePage number", pn)
        getMyBlogsByPageNum(pn)
    
    }

    function handleError(errType, errMsg){
        setError(prev => ({
            ...prev,
            "errorType":errType,
            "errorMsg":errMsg
        }))
    }

    // Function to remove a blog from the list after deletion
    const handleDeleteBlog = (deletedBlogId) => {
        setBlogs((prevBlogs) => prevBlogs.filter(blog => blog._id !== deletedBlogId));
    };

    if(user){
        return <>
            <Text 
            fontSize='3xl' 
            align='center'
            >  Welcome {user.username} !</Text>
            {blogs && <>
                <Box
            display='flex'
            pl={2}
            height='full'
            paddingTop='2em'
            paddingBottom='2em'
            >
                
                <Text 
                align='center'>
                   
                   <Center>
                        <Flex 
                        gap='5' 
                        wrap='wrap'
                        justify='center'
                        >   
                                { blogs && blogs.blogs && blogs.blogs.map(blog => (
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
            </>}
        <PageNav blogData={blogs} onPageChange={handlePageNumber} onErrorChange={handleError} />
        <Error err={error} />
            
        </>
    }
}

export default MyPage;