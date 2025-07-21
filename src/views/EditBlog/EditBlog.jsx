
import { useEffect, useState } from "react"
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate, useParams } from 'react-router-dom';
import { read_blog } from "../../utils/read_blog";
import { uploadimg } from '../../utils/uploadimg';
import { Card, CardHeader, CardBody,CardFooter, Button, Text,Box, Heading, Spacer} from '@chakra-ui/react'
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
    const [newImgProcessStarted, setNewImgProcessStarted] = useState(false)
    

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
                setNewImgProcessStarted(true)
                const data = await uploadimg(image)

                if(data && data.success === true){
                    console.log(data.img_url)
                    setNewImgUrl(data.img_url)
                }
                setNewImgProcessStarted(false)
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
      
        let data_obj;
   
        if (newImgUrl){
            data_obj = {'title':blogTitle,'content':blogContent,'img_url':newImgUrl}
            console.log("new img url")
         
        }else{
            data_obj = {'title':blogTitle,'content':blogContent,'img_url':blogImg}
        }

        if (data_obj) {
            console.log(data_obj)
            const data = await update_blog(blog_id, data_obj)        

            if(data){
                naviagte(`/blogs/blog/${blog_id}`)
            }
        }
    }


    return <>
    <Card
    margin='1em'
    >
        <form onSubmit={handleSubmit}>
        <FormControl fontWeight={'bold'}>
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
           
        <FormLabel> Image</FormLabel>
          <Input type="file" id='image' name='image'
          onChange={(e)=>{setImage(e.target.files[0])}}
           />
        {newImgProcessStarted &&<> <Text>Wait for photo to finish upload ...</Text></>}


        <FormLabel 
        marginTop='4'
        fontWeight={'bold'}
        >Content</FormLabel>
            
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