import './LoginForm.css'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    useSafeLayoutEffect
  } from '@chakra-ui/react'

import { Card, CardHeader, CardBody,CardFooter, Button, Text,Box, Heading} from '@chakra-ui/react'
import { userLogin } from '../../utils/login_api';
import { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';


export const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoggedin, setIsloggedin] = useState(false)
  const {login} = useContext(AuthContext)
  const navigate = useNavigate()
  const [UserExists, setUserExists] = useState('')
  const [isPwCorrect, setIsPwCorrect] = useState('')
  

  const handleSubmit = async(e) => {
    e.preventDefault()
    try{
      const data = await userLogin({username,password})
      console.log("from login form",data.isLoggedin)
      console.log(data.username)
      if(data && data.username && data.isLoggedin){
        const userData = {"username":data.username, "isLoggedin":data.isLoggedin}

        console.log(login(userData))
        setUserExists("")
        setIsPwCorrect("")
        navigate("/mypage")
      }else{
        console.log("login failure",data)
        if(data.userExists) {
          setUserExists("true")
        }
        if(data.passwordCorrect){
          setIsPwCorrect("true")
        }

        if(data.userExists === false){
          console.log("user does not exist")
          setUserExists("false")
        }
        else if(data.passwordCorrect === false){
          setIsPwCorrect("false")
          console.log("user password does not match")
        }
        // conditional error message function 
      }

    }catch(error){
      console.log(error)
    }
  }

  const errorMsg = () => {

    if(UserExists === "false") {
      return (
        <>
        <Text>The user does not exist</Text>
        </>
      )
    }else if(isPwCorrect === "false") {
      return (
        <>
          <Text>The password is incorrect</Text>
        </>
      )
    }
    
  }

  return(
    <>
    <Box
    bg='#FFFFF0'
    height="90vh"
    display='flex'
    alignItems='center'
    justifyContent="center"
    >

    <Card
    border='1px'
    borderColor='orange.100'
    >
      <CardHeader>
        <Heading 
        size='md'
        align='center'
        >
          Welcome Back!
        </Heading>
      </CardHeader>

      <form onSubmit={handleSubmit}>
        <CardBody>
          <FormControl isRequired>
            <FormLabel>Username</FormLabel>
            <Input type="text" name="username" id="username"
            value={username}
            onChange ={(e)=>{setUsername(e.target.value)}}
            />

            <FormLabel>Password</FormLabel>
            <Input type="password" name="password" id="password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            />
        </FormControl>
        {errorMsg()}
        </CardBody>
        <CardFooter justifyContent='center' >
          <Button  colorScheme='yellow' size='lg' type='submit'>
            Submit
          </Button>
        </CardFooter>
      </form>
    </Card>

    </Box>
    </>
  )
}

