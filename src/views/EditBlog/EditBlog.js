
import { useEffect, useState } from "react"
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate, useParams } from 'react-router-dom';
import { Navbar } from "../../components/Navbar/Navbar";
import { read_blog } from "../../utils/read_blog";
import { uploadimg } from '../../utils/uploadimg_api';
import { Card, CardHeader, CardBody,CardFooter, Button, Text,Box, Heading} from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Textarea
  } from '@chakra-ui/react'
import { update_blog } from "../../utils/update_blog";

export const EditBlog = () => {
    const { user } = useContext(AuthContext)
    const {blog_id} = useParams()
    const naviagte = useNavigate()
    const [blog, setBlog] = useState(null)
    const [blogTitle, setBlogTitle] = useState('')
    const [blogImg, setBlogImg] = useState('')
    const [image, setImage] = useState()
    const [newImgUrl, setNewImgUrl] = useState('')
    const [blogContent, setBlogContent] = useState('')
    

    useEffect(()=>{
        if(!user){
            naviagte('/')
        }
    })
   
    useEffect(()=>{
        async function readBlog(){
            const data = await read_blog(blog_id)
            if(data){
                setBlog(data)
                setBlogTitle(data.title)
                setBlogImg(data.img_url)
                setBlogContent(data.content)
           
            }
        }
        readBlog()
    },[])

    useEffect(() => {
        async function fetchData(){
            if(image){
                console.log("new image detectd")
                const data = await uploadimg(image)
                if(data && data.success === true){
                    console.log(data.img_url)
                    setNewImgUrl(data.img_url)
                }
            }
        }
       
        fetchData()
    },[image])
    

    const handleSubmit = async(e) => {
        e.preventDefault()
        
        console.log(blogTitle)
        console.log(blogContent)
        console.log("current img url",blogImg) // old img url
        console.log("new img url",newImgUrl) // new img url
        console.log(blog_id)
      
        const data_obj = {'title':blogTitle,'content':blogContent,'img_url':newImgUrl ? newImgUrl : blogImg}
        console.log(data_obj)
        const data = await update_blog(blog_id, data_obj)
        
        if(data){
            naviagte(`/blogs/blog/${blog_id}`)
        }
        

    }

    return <>
    <Navbar page ='loggedin'/>
    <Card>
        <form onSubmit={handleSubmit}>
        <FormControl>
        <CardHeader>
            <FormLabel>
                Blog Title
            </FormLabel>
            <Input type="text" name="title" id="blog_text"
            value={blogTitle}
            onChange={(e)=>{setBlogTitle(e.target.value)}}
             />
        </CardHeader>
        <CardBody>
            {/* fix image */}
        <FormLabel> Image</FormLabel>
          <Input type="file" id='image' name='image'
          onChange={(e)=>{setImage(e.target.files[0])}}
           />


        <FormLabel>Content</FormLabel>
            
            <Textarea
                size='md'
                h='300px'
                value={blogContent}
                onChange={(e)=>{setBlogContent(e.target.value)}}
            >
            </Textarea>

        </CardBody>
      
       <CardFooter>
                <Button type="submit">Update</Button>
       </CardFooter>
       </FormControl>
       </form>
    </Card>


    </>


}