import './SignupForm.css'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input
  } from '@chakra-ui/react'

import { Card, CardHeader, CardBody,CardFooter, Button, Text,Box, Heading} from '@chakra-ui/react'

export const SignupForm = () => {

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
                <FormControl >
                    <FormLabel>
                        Username
                    </FormLabel>
                    <Input type="text" name='username' id='username'/>

                    <FormLabel pt='3'>
                        Password
                    </FormLabel>
                    <Input type="password" name='password' id='password'/>
                    <FormHelperText color='orange.600'>
                        It is strongly recommended to use a combination of characters such as numbers, letters etc.
                    </FormHelperText>

                    <FormLabel pt='3'>
                        Email
                    </FormLabel>
                    <Input type="email" name='email' id='email'/>
                </FormControl>
                <CardFooter justifyContent='center'>
                    <Button colorScheme='yellow' size='lg'>
                        Signup
                    </Button>
                </CardFooter>
            </Card>
        </Box>
    )

}