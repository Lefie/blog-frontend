import './Navbar.css'
import { Box, Text, Button,Spacer } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
  } from '@chakra-ui/react'

import { useContext } from "react";
import { AuthContext } from '../../context/AuthContext';



export const Navbar = ( props ) => {

    const page = props.page
    const { user, logout } = useContext(AuthContext)

    function Page({page}) {

        if (page === "loggedin"){
            return (
                <Menu>
                    <MenuButton as={Button} p='2' colorScheme='green'>
                        Menu
                    </MenuButton>
                    
                        <MenuList>
                            <MenuGroup>
                            <Link to="/mypage">
                            <MenuItem>Home</MenuItem>
                            </Link>
                            
                            <Link to="/create_blog">
                            <MenuItem>Write</MenuItem>
                            </Link>

                            <Link to="/blogs">
                            <MenuItem>Blogs</MenuItem>
                            </Link>

                            <Link to="/blogs/authors">
                            <MenuItem>Authors</MenuItem>
                            </Link>

                            <Link to="/" onClick={logout}>
                            <MenuItem>Logout</MenuItem>
                            </Link>

                        
                            </MenuGroup>
                        </MenuList>
                    </Menu>
            )
        }

        if (page == 'not_logged_in'){
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
                        <MenuItem>Log in</MenuItem>
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
            <Text p={1} as='b' borderRight='1px' w='5%' fontSize='lg'>
            {user? <Link to='/mypage'>
                Blog
            </Link> :
                <Link to='/'>
                Blog
            </Link>
            }
            
            </Text>
            <Spacer />
           <Page page={page}/>
        </Box>
        </>
    )

}