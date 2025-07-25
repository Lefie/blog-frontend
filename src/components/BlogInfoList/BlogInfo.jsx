import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { read_blog } from "../../utils/read_blog"
import { Image, Box, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export const BlogInfo = () => {
    const {blog_id} = useParams()
    const [blog,setBlog] = useState(null)
    const [title,setTitle] = useState('')
    const [author,setAuthor] = useState('')
    const [date, setDate] = useState('')
    const [updatedDate, setUpdatedDate] = useState('')
    const [imgurl,setImgurl] = useState('')
    const [blogId, setBlogId] = useState('')
    const [content, setContent] = useState('')




    useEffect(()=>{
        async function fetchBlog() {
            const data = await read_blog(blog_id)
            console.log("blog info yadayada",data)
            if(data){
                setBlog(data)
                setTitle(data.title)
                setImgurl(data.img_url)
                setAuthor(data.author)
                setDate(data.date)
                setContent(data.content)
                setBlogId(data._id)
                setUpdatedDate(data.updated_date)
            }
        }
        fetchBlog()  
    
    },[])

  
    const Img = () =>{
        const default_img = 'https://www.dominicanajournal.org/wp-content/uploads/2025/06/chaojie-ni-8HVfSz-sbOQ-unsplash-scaled.jpg'

        if (imgurl){
            return <Image margin="auto" height="15rem" src={imgurl} alt={`${title} photo`}/>
        }else{
            return <Image margin="auto" height="15rem" src={default_img} alt={`${title} photo`} />
        }
    }

    const IsUpdated = () => {
        if(updatedDate){
            return <>
            Last Updated : {updatedDate.toString().slice(0,10)}
            </>
        }else{
            return <>
            </>
        }
    }



    if(blog){

        return <>
        <Box
        p={10}
        display='flex'
        flexDirection='column'
        minHeight='50vh'
        justifyContent='space-around'
        >
        <Text fontSize="3xl">{title}</Text>
        <hr/>
        <Box display='flex' gap={2}>
            <Link class='link' to = {`/blogs/author/${author}`}><Text>{author} </Text></Link>
            <Text>|</Text>
            <Text>{date.toString().slice(0,10)}</Text>
            <Text>|</Text>
            <IsUpdated />
        </Box>
        <hr/>
        
        <br/>
        <Img />
        <Text 
        borderRadius='0.2em'
        marginTop='1em'
        padding='0.5rem'
        maxWidth='30rem'
        whiteSpace="pre-line"> {content} </Text> 
        </Box>
     </>
    }else{
        return<>
        <Text>
            nothing to see
        </Text>
        </>
    }

}