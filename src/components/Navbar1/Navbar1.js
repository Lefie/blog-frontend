import './Navbar1.css'
import { Box, Text, Button,Spacer } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
  } from '@chakra-ui/react'

export const Navbar1 = ( props ) => {

    const page = props.page

    function Page({page}) {
        if(page === "blogs"){
            return (
                <Menu>
                <MenuButton as={Button} p='2' colorScheme='green'>
                    Menu
                </MenuButton>
                
                    <MenuList>
                        <MenuGroup>
                        <Link to="/">
                        <MenuItem>Home</MenuItem>
                        </Link>

                        <Link to="/signup">
                        <MenuItem>Sign up</MenuItem>
                        </Link>

                        <Link to="/login">
                        <MenuItem>Login</MenuItem>
                        </Link>
                        </MenuGroup>
                    </MenuList>
                </Menu>
            )
        }

        if(page === "login"){
            return (
                <Menu>
                <MenuButton as={Button} p='2' colorScheme='green'>
                    Menu
                </MenuButton>
                
                    <MenuList>
                        <MenuGroup>
                        <Link to="/">
                        <MenuItem>Home</MenuItem>
                        </Link>

                        <Link to="/signup">
                        <MenuItem>Sign up</MenuItem>
                        </Link>

                         <Link to="/blogs">
                        <MenuItem>Blogs</MenuItem>
                        </Link>
                        </MenuGroup>
                    </MenuList>
                </Menu>
            )
        }

        if(page === "signup"){
            return (
                <Menu>
                <MenuButton as={Button} p='2' colorScheme='green'>
                    Menu
                </MenuButton>
                
                    <MenuList>
                        <MenuGroup>
                        <Link to="/">
                        <MenuItem>Home</MenuItem>
                        </Link>
                        
                        <Link to="/login">
                        <MenuItem>Login</MenuItem>
                        </Link>

                        <Link to="/blogs">
                        <MenuItem>Blogs</MenuItem>
                        </Link>
                    
                        </MenuGroup>
                    </MenuList>
                </Menu>
            )
        }

    }

    return (
        <>
    
        <Box 
        w='100%' 
        p='4' 
        bg="#FAF089"
        display="flex"
        >
            <Text as='b' borderRight='1px' w='5%' fontSize='lg'>
            <Link to='/'>
                Blog
            </Link>
            </Text>
            <Spacer />
           <Page page={page}/>
        </Box>
        </>
    )

}