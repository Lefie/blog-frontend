import "./Blogs.css"
import { AuthContext } from '../../context/AuthContext';
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { all_blogs } from "../../utils/all_blogs";
import { all_blogs_paginated } from "../../utils/all_blogs_paginated";
import { SingleBlog } from "../../components/SingleBlog/SingleBlog";
import { Link } from "react-router-dom";
import { Box, Flex, Button, Spacer, Text, Center, Input } from "@chakra-ui/react";
import { Error } from "../../components/Error/Error";
import { PageNav } from "../../components/PageNav/PageNav";

function Blogs() {
    const [blogs, setBlogs] = useState({
        "blogs":[],
        "curPageNum":1,
        "isNextPage":false,
        "isPrevPage":false,
        "totalPageNum":0
    })
    const [error, setError] = useState({
        "errorType": "",
        "errorMsg":""
    })
 

    useEffect(()=>{
        if(blogs) {
            console.log("blogs from test use effect")
            console.log(blogs)
        }
    },[blogs])

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


    async function fetchData(page) {
        let all_blogs = await all_blogs_paginated(page)
        
        if (all_blogs) {
            setBlogs(prev => ({
                ...prev,
                "blogs": all_blogs.blog_data,
                "curPageNum":page,
                "totalPageNum": all_blogs.pagination.totalPages,
                "isNextPage": all_blogs.pagination.hasNextPage,
                "isPrevPage": all_blogs.pagination.hasPrevPage
            }))
        }
    }

    useEffect(()=>{
        fetchData(1)
    },[])

    function handleBlogData(newPage){
        console.log("change blog data", newPage)
        fetchData(newPage)
    }

    function handleError(err_type, err_message){
        setError(prev => ({
            ...prev,
            "errorMsg":err_message,
            "errorType":err_type
        }))
    }

    return <>
        <Flex
        margin='1em'
        gap='5' 
        wrap='wrap'
        justify='center'
        >
            {blogs && blogs.blogs && blogs.blogs.map(
                (blog)=>(
                    <SingleBlog key={blog._id} blog={blog} page="all"/>
                )
            )}
        </Flex>
       
        <PageNav blogData={blogs} onPageChange={handleBlogData} onErrorChange={handleError}/>
        <Error err={error} />
           
    </>
}


export default Blogs;

