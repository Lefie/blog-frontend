import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"
import { blogs_by_author } from "../../utils/blogs_by_author"
import { Text, Box } from "@chakra-ui/react"
import { Link } from "react-router-dom"


export const AuthorBlog = () => {

    const {user} = useContext(AuthContext)
    const {author_name} = useParams()
    const navigate = useNavigate()
    const [blogs, setBlogs] = useState(null)
    
    
    useEffect(()=>{
        async function fetchBlogsByAuthor(){
            const blogs_author = await blogs_by_author(author_name)
            if(blogs_author){
                setBlogs(blogs_author)
            }
        }
        fetchBlogsByAuthor()
        
    },[])
    

        return <>
        <Box 
        minHeight='15rem'
        minWidth='30rem'
        overflowY='scroll'
        p='1em'
        >
            <Text fontSize='3xl'>
                {author_name}
            </Text>
            {blogs && blogs.map((blog)=>(
               <Text><Link class='link' to={`/blogs/blog/${blog._id}`}>{blog.title} </Link> | {blog.date.toString().slice(0,10)}</Text>
            ))}
        
        </Box>
        
        </>

}