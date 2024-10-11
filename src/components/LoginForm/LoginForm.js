import './LoginForm.css'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input
  } from '@chakra-ui/react'

import { Card, CardHeader, CardBody,CardFooter, Button, Text,Box, Heading} from '@chakra-ui/react'

export const LoginForm = () => {

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

      <CardBody>
        <FormControl>
        <FormLabel>Username</FormLabel>
        <Input type="text" name="username" id="username" />

        <FormLabel>Password</FormLabel>
        <Input type="password" name="password" id="password" />
      </FormControl>
      </CardBody>
      <CardFooter justifyContent='center' >
        <Button  colorScheme='yellow' size='lg'>
          Submit
        </Button>
      </CardFooter>
    </Card>

    </Box>
    </>
  )
}

