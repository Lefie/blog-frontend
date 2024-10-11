import './SignupForm.css'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input
  } from '@chakra-ui/react'

import { Card, CardHeader, CardBody,CardFooter, Button, Text,Box, Heading} from '@chakra-ui/react'
import React,{ useState } from 'react'
import { userSignup } from '../../utils/signup_api'

export const SignupForm = () => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(name, password, email)
        try{
            await userSignup({name,password,email})

        }catch(error){
            console.log(error)
        }

        
    }

    return (
        <Box
        bg='#FFFFF0'
        height='90vh'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        >
            
            <Card
            p='12'
            w='45%'
            border='1px'
            borderColor='orange.100'
            >
                <CardHeader>
                    <Heading 
                    size='md'
                    align='center'
                    >Welcome!</Heading>
                </CardHeader>

                <form onSubmit={handleSubmit}>
                <FormControl isRequired>
                    <FormLabel>
                        Username
                    </FormLabel>
                    <Input 
                    type="text" 
                    name='username' 
                    id='username'
                    placeholder={name}
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}}
                    />
                    <FormLabel pt='3'>
                        Password
                    </FormLabel>
                    <Input 
                    type="password" name='password' id='password'
                    value={password} onChange={(e)=>{setPassword(e.target.value)}}
                    />
                    <FormHelperText color='orange.600'>
                        It is strongly recommended to use a combination of characters such as numbers, letters etc.
                    </FormHelperText>

                    <FormLabel pt='3'>
                        Email
                    </FormLabel>
                    <Input type="email" name='email' id='email'
                    value={email} onChange={(e)=>{setEmail(e.target.value)}}
                    />
                </FormControl>
                
                <CardFooter justifyContent='center'>
                    <Button colorScheme='yellow' size='lg' type='submit'>
                        Signup
                    </Button>
                </CardFooter>
                </form>
            </Card>

        </Box>
    )

}