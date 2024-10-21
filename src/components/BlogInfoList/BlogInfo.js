import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { read_blog } from "../../utils/read_blog"

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
        if (imgurl){
            return <img src={imgurl} alt={`${title} photo`}/>
        }
    }



    if(blog){

        return <>
        <h1>{title}</h1>
        <h2>{author}</h2>
        <h2>{date}</h2>
        
        <br/>
        <Img />
        <p>{content}</p>
 
     </>
    }else{
        return<>
            <p>Nothing to see</p>
        </>
    }

}