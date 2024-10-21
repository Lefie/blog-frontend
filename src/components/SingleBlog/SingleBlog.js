import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { Button, Heading } from "@chakra-ui/react"
import {Card,CardHeader,CardBody,CardFooter} from '@chakra-ui/react'
import { Text, ButtonGroup, Divider, Image } from "@chakra-ui/react"
import './SingleBlog.css'
import { img } from "framer-motion/client"
import { useContext } from "react";
import { AuthContext } from '../../context/AuthContext';


export const SingleBlog = ({blog}) => {

    const {user} = useContext(AuthContext)

    const default_img = 'https://signsofchrist.com/cdn/shop/products/JesusLovesYou.jpg?v=1641061351'
    const [imgUrl, setImgUrl] = useState(blog.img_url)
    console.log(blog.img_url)
    if(!imgUrl){
        setImgUrl(default_img)
    }

    const ButtonList = () => {
        if(user && user.username === blog.author){
            console.log(user.username , blog.author)
            return <ButtonGroup spacing='5'>
            <Link to={`/blogs/blog/${blog._id}`}>
                <Button colorScheme='green' variant='solid'>Read</Button>
                </Link>
                <Link>
                <Button colorScheme='green' variant='ghost'>Edit</Button>
                </Link>
                <Link>
                <Button colorScheme='green' variant='ghost'> Delete </Button>
                </Link>
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
    <Card maxW='sm' bg='yellow.100'>
        <CardBody>
                `<Image
            src={imgUrl}
            alt='Default photo'
            borderRadius='lg'
            />
            <Heading pt={2} size='md' align='center' >{blog.title}</Heading>
        `    <Text align='center' fontSize='lg'>
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