import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { read_blog } from "../../utils/read_blog"
import { Image, Box, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export const BlogInfo = () => {
    const {blog_id} = useParams()
    console.log("the blog id is", blog_id)
    const [blog,setBlog] = useState(null)
    const [title,setTitle] = useState('')
    const [author,setAuthor] = useState('')
    const [date, setDate] = useState('')
    const [imgurl,setImgurl] = useState('')
    const [blogId, setBlogId] = useState('')
    const [content, setContent] = useState('')

    useEffect(()=>{
        async function fetchBlog() {
            const data = await read_blog(blog_id)
            console.log(data)
            if(data){
                setBlog(data)
                setTitle(data.title)
                setImgurl(data.img_url)
                setAuthor(data.author)
                setDate(data.date)
                setContent(data.content)
                setBlogId(data._id)
            }
        }
        fetchBlog()
    },[])

    const Img = () =>{
        const default_img = 'https://signsofchrist.com/cdn/shop/products/JesusLovesYou.jpg?v=1641061351'

        if (imgurl){
            return <Image src={imgurl} alt={`${title} photo`}/>
        }else{
            return <Image src={default_img} alt={`${title} photo`} />
        }
    }



    if(blog){

        return <>
        <Box
        p={12}
        >
        <Text fontSize="3xl">{title}</Text>
        <hr/>
        <Box display='flex' gap={2}>
        <Link class='link' to = {`/blogs/author/${author}`}><Text>{author} </Text></Link>
        <Text>|</Text>
        <Text>{date}</Text>
        </Box>
        <hr/>
        
        <br/>
        <Img />
            <Text mt={8}>{content}</Text>
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