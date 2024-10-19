import './WriteBlogForm.css'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Textarea
  } from '@chakra-ui/react'

import { Card, CardHeader, CardBody,CardFooter, Button, Text,Box, Heading} from '@chakra-ui/react'
import React,{ useEffect, useState } from 'react'
import {
 useNavigate
} from "react-router-dom";
import { uploadimg } from '../../utils/uploadimg_api';
import { publish } from '../../utils/publish_blog';


export const WriteBlogForm = () => {

    const [title,setTitle] = useState('')
    const [content, setContent] = useState('')
    const [image, setImage] = useState()
    const [imageurl, setImageurl] = useState('')
    const navigate = useNavigate()

    const handleImage = async(e) => {
        setImage(e.target.files[0])  
    }

    useEffect(() => {
        if(image){
            console.log(image, "from handle image")
            async function fetchData(){
                const data = await uploadimg(image)
                if(data && data.success === true){
                    console.log(data.img_url)
                    setImageurl(data.img_url)
                }
            }
            fetchData()
        }
    },[image])
    

    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log(title)
        console.log(content)
        console.log(imageurl)
        const data = await publish({title,content,imageurl})
        if(data){
            const blog_id = data._id
            console.log("navigate to /user/article/article-name")
            navigate('/blogs/mypage/'+blog_id)
            console.log(data)
        }
    }

    return <>
    <Card>
        <form onSubmit={handleSubmit} >
        <FormControl>
            <CardHeader>
                <FormLabel>Blog Title</FormLabel>
                <Input type="text" name="title" id="blog_text"
                    value = {title}
                    onChange={(e)=>{setTitle(e.target.value)}}
                 /> 
            </CardHeader>
            <CardBody>
            <FormLabel> Image</FormLabel>
            <Input type="file" id='image' name='image'
            onChange={handleImage}
                
             />
            <FormLabel>Content</FormLabel>
            
            {/* <Input h='500px'type="text" name="content" id="blog_content" /> */}
            <Textarea
                size='md'
                h='300px'
                value={content}
                onChange={(e)=>{setContent(e.target.value)}}
            >
            </Textarea>
            </CardBody>
            <CardFooter>
                <Button type="submit">Publish</Button>
            </CardFooter>
        </FormControl>
        </form>
    </Card>
    </>
}