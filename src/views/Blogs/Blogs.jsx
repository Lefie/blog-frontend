import "./Blogs.css"
import { AuthContext } from '../../context/AuthContext';
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { all_blogs } from "../../utils/all_blogs";
import { SingleBlog } from "../../components/SingleBlog/SingleBlog";
import { Link } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
function Blogs() {

   
    const navigate = useNavigate()
    const {user} = useContext(AuthContext)
    const [allBlogs, setAllBlogs] = useState(null)

    useEffect(()=>{
        async function fetchAllBlogs() {
            const blogs = await all_blogs()
            console.log("blogs blogs blogs",blogs)
            
            if(blogs){
                console.log(blogs)
                setAllBlogs(blogs)
            }
        }
        
        fetchAllBlogs()
    },[])

    return <>
        <Flex
        margin='1em'
        gap='5' 
        wrap='wrap'
        justify='center'
        >
            {allBlogs && allBlogs.map(
                (blog)=>(
                    <SingleBlog key={blog._id} blog={blog} page="all"/>
                )
            )}
        </Flex>
 
    </>
    
}


export default Blogs;

