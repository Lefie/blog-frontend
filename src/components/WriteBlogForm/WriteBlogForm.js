import './WriteBlogForm.css'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Textarea,
    Box
  } from '@chakra-ui/react'
import { Card, CardHeader, CardBody,CardFooter, Button, Image} from '@chakra-ui/react'
import React,{ useEffect, useState, useRef } from 'react'
import {
 useNavigate
} from "react-router-dom";
import { uploadimg } from '../../utils/uploadimg_api';
import { publish } from '../../utils/publish_blog';
import Quill from 'quill';
import "quill/dist/quill.snow.css";  // Full Quill styles (toolbar, editor, etc.)
import "quill/dist/quill.core.css";


export const WriteBlogForm = () => {

    const [title,setTitle] = useState('')
    const [content, setContent] = useState('')
    const [image, setImage] = useState()
    const [imageurl, setImageurl] = useState('')
    const navigate = useNavigate()
    const handleImage = async(e) => {
        setImage(e.target.files[0])  
    }
 
    // fetch image 
    useEffect(() => {
        if (!image) return;
        async function fetchData(){
            const data = await uploadimg(image)
            if(data && data.success === true){
                console.log(data.img_url)
                setImageurl(data.img_url)
            }
        }
        fetchData()
    },[image])

    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log(title,content,imageurl)

        const data = await publish({title,content,imageurl})
        if(data){
            const blog_id = data._id
            console.log("navigate to /user/article/article-name")
            navigate('/blogs/mypage/'+blog_id)
            console.log(data)
        }     
    }

    const handleRemoveImage = async(e) => {
        e.preventDefault()
        setImage(null)
        setImageurl('')
        console.log("image cleared")
    }

   

    return <>
    <Card>
        <form onSubmit={handleSubmit} >
        <FormControl>
            <CardHeader>
                <FormLabel>Blog Title</FormLabel>
                <Input type="text" name="title" id="blog_text"
                    value = {title}
                    isRequired
                    onChange={(e)=>{setTitle(e.target.value)}}
                 /> 
            </CardHeader>
            <CardBody>
                <FormLabel> Image</FormLabel>
                <Input marginBottom={3} type="file" id='image' name='image'
                onChange={handleImage}
                />
                {imageurl && <Image height="100px" src={imageurl} alt="Blog Preview"></Image>}
                <Button onClick={handleRemoveImage}>Remove Image</Button>

                <FormLabel>Content</FormLabel>
  
               <Textarea
                    size='md'
                    h='300px'
                    value={content}
                    onChange={
                        (e)=>{
                        console.log(e.target.value)
                        setContent(e.target.value)}
                    }
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