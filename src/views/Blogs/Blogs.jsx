import "./Blogs.css"
import { AuthContext } from '../../context/AuthContext';
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { all_blogs } from "../../utils/all_blogs";
import { all_blogs_paginated } from "../../utils/all_blogs_paginated";
import { SingleBlog } from "../../components/SingleBlog/SingleBlog";
import { Link } from "react-router-dom";
import { Box, Flex, Button, Spacer } from "@chakra-ui/react";
function Blogs() {

   
    const navigate = useNavigate()
    const {user} = useContext(AuthContext)
    const [allBlogs, setAllBlogs] = useState(null)
    
    const [pageNum, setPageNum] = useState()
    const [blogs, setBlogs] = useState({
        "blogs":[],
        "curPageNum":1,
        "isNextPage":false,
        "isPrevPage":false,
        "totalPageNum":0
    })


    useEffect(()=>{
        async function fetchAllBlogs() {
            const blogs = await all_blogs()
            console.log("blogs blogs blogs",blogs)

            
            if(blogs){
                //console.log(blogs)
                setAllBlogs(blogs)
            }
        }
        
        fetchAllBlogs()
    },[])

    useEffect(()=>{
        async function get_all_blogs_paginated(curPage=1){
            console.log("cur page", curPage)
            const all_blogs = await all_blogs_paginated(curPage)

            if (all_blogs) {
                console.log("cur page", curPage )
                setBlogs(prev => ({
                    ...prev,
                    "curPageNum":curPage
                }) )
                setBlogs(prev => ({
                    ...prev,
                    "blogs": all_blogs.blog_data
                }))

                setBlogs(prev => ({
                    ...prev,
                    "isNextPage": all_blogs.pagination.hasNextPage
                }))

                setBlogs(prev => ({
                    ...prev,
                    "isPrevPage": all_blogs.pagination.hasPrevPage
                }))

                setBlogs(prev => ({
                    ...prev,
                    "totalPageNum": all_blogs.pagination.totalPages
                }))
               
            }

        }
        get_all_blogs_paginated(1)
    },[])

    useEffect(()=>{
        if(blogs) {
            console.log("blogs from test use effect")
            console.log(blogs)
        }

    },[blogs])

    async function updatePage(e){
        console.log(e.target.direction)
        let new_page_num = -1
        let all_blogs;
       if (e.target.direction === "prev") {
            console.log( blogs.curPageNum)
            new_page_num = blogs.curPageNum - 1 > 0 ? blogs.curPageNum - 1: 1
            console.log("new page num", new_page_num)
            all_blogs = await all_blogs_paginated(new_page_num)
            console.log("new set of blogs", all_blogs)
        }

        if (e.target.direction === "next") {
            console.log( blogs.curPageNum)
            new_page_num = blogs.curPageNum + 1 > blogs.totalPageNum ? blogs.totalPageNum: blogs.curPageNum + 1
            console.log("new page num", new_page_num)
            all_blogs = await all_blogs_paginated(new_page_num)
            console.log("new set of blogs", all_blogs)
        }

         if (all_blogs) {
                    console.log("cur page", new_page_num )
                    console.log("dali da", all_blogs)
                    setBlogs(prev => ({
                        ...prev,
                        "curPageNum":new_page_num
                    }) )
                    setBlogs(prev => ({
                        ...prev,
                        "blogs": all_blogs.blog_data
                    }))

                    setBlogs(prev => ({
                        ...prev,
                        "isNextPage": all_blogs.pagination.hasNextPage
                    }))

                    setBlogs(prev => ({
                        ...prev,
                        "isPrevPage": all_blogs.pagination.hasPrevPage
                    }))

                    setBlogs(prev => ({
                    ...prev,
                    "totalPageNum": all_blogs.pagination.totalPages
                }))
                
                }
      
       
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
        <Flex marginBottom='1em' gap='5' >
             {blogs && blogs.isPrevPage && (<Button onClick={(e)=> {
                e.target.direction = "prev"
                updatePage(e)}} size="xs">Prev</Button>)}
             <p>current page: {blogs.curPageNum}</p>
             {blogs && blogs.isNextPage && ( <Button onClick={(e) => {
                e.target.direction = "next"
                updatePage(e)
             }} size="xs" >Next</Button>)}
            
        </Flex>
 
    </>
    
}


export default Blogs;

