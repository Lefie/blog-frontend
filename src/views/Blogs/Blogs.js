import "./Blogs.css"
import { Navbar } from "../../components/Navbar/Navbar";
import { AuthContext } from '../../context/AuthContext';
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { all_blogs } from "../../utils/all_blogs";
import { SingleBlog } from "../../components/SingleBlog/SingleBlog";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";
function Blogs() {

   
    const navigate = useNavigate()
    const {user} = useContext(AuthContext)
    const [allBlogs, setAllBlogs] = useState(null)

    useEffect(()=>{
        async function fetchAllBlogs() {
            const blogs = await all_blogs()
            
            if(blogs){
                console.log(blogs)
                setAllBlogs(blogs)
            }
        }
        
        fetchAllBlogs()
    },[])

    const WhichNavbar = () => {
        if(user){
            return <Navbar page ='loggedin'/>
        }else{
            return <Navbar page='not_logged_in' />
        }
    }

    return <>
    <WhichNavbar />
    <Box
    mt={2}
    display='flex'
    flexDirection='column'
    alignItems='center'
    >
        {allBlogs && allBlogs.map(
            (blog)=>(
                <SingleBlog blog={blog}/>
        )
        )}
    </Box>
    
    </>
    

}


export default Blogs;

