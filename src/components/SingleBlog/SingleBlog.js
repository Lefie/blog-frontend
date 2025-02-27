import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { Button, Heading } from "@chakra-ui/react"
import {Card,CardHeader,CardBody,CardFooter} from '@chakra-ui/react'
import { Text, ButtonGroup, Divider, Image, Box, Center } from "@chakra-ui/react"
import './SingleBlog.css'
import { useContext } from "react";
import { AuthContext } from '../../context/AuthContext';
import { delete_blog } from "../../utils/delete_blog"
import { useNavigate } from "react-router-dom"

export const SingleBlog = ({blog,page,onDelete}) => {

    const {user} = useContext(AuthContext)
    const naviagte = useNavigate()
    const default_img = 'https://signsofchrist.com/cdn/shop/products/JesusLovesYou.jpg?v=1641061351'
    const [imgUrl, setImgUrl] = useState(blog.img_url)
    console.log(blog.img_url)
    if(!imgUrl){
        setImgUrl(default_img)
    }
    console.log("What page am I on", page)
    const [showPopup, setShowPopup] = useState(false)

    const handleClickDelete = async(e) => {
        e.preventDefault();
        setShowPopup(true)
       
    }

    const handleClickNo = async(e) => {
        e.preventDefault()
        setShowPopup(false)
    }

    const handleClickYes = async(e) => {
        e.preventDefault()
        try{
            const data = await delete_blog(blog._id);
            if(data){
                console.log("delete succesfully")
                onDelete(blog._id); // inform parent component to update the state
                setShowPopup(false)
            }

        }catch(err){
            console.log("error from handle click yes", err)
        }
    }

    const Popup = () => {
        return <>
        <Box p={4} bg='orange.300'>
            <Text> Are you sure you want to delete this post? </Text>
            <Button onClick={handleClickYes} bg='green.300'>Yes </Button>
            <Button onClick={handleClickNo} bg='red.300'>No</Button>
        </Box>
        </>
    }

    const Display = () =>{
        if(showPopup === true){
            return <Popup />
        }
    }
    

    const ButtonList = () => {
        
        if(user && user.username === blog.author && page === "mypage"){
            console.log(user.username , blog.author)
            return <ButtonGroup spacing='5'>
            <Link to={`/blogs/blog/${blog._id}`}>
                <Button colorScheme='green' variant='solid'>Read</Button>
                </Link>
                <Link to={`/blogs/edit/${blog._id}`}>
                <Button colorScheme='green' variant='ghost'>Edit</Button>
                </Link>
                
                <Button onClick={handleClickDelete} colorScheme='green' variant='ghost'> Delete </Button>
                
                <Display />
            </ButtonGroup>  
        }else{
            return <ButtonGroup spacing='5'>
            <Link to={`/blogs/blog/${blog._id}`}>
                <Button colorScheme='green' variant='solid'>Read</Button>
                </Link>
            </ButtonGroup>  
        }
    }
    
    

    return <>
    <Card 
    width="320px"
    minHeight="100%"
    bg='yellow.100'>
        <CardBody maxHeight="320px">
            <Center>
            <Image
                src={imgUrl}
                alt='Default photo'
                borderRadius='lg'
                maxHeight="180px"
                />
            </Center>

            <Heading pt={2} size='md' align='center' >{blog.title}</Heading>

            <Text align='center' fontSize='lg'>
                <Link class='link' to={`/blogs/author/${blog.author}`}> {blog.author}  </Link> | {blog.date}
            </Text>
  
        </CardBody>
        <Divider />
        <CardFooter justifyContent='center'>
                 <ButtonList />
        </CardFooter>
    </Card>

   <br/>

   
   
    </>
}