import "./Layout.css"
import { Box, Text, Button,Spacer,Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup } from '@chakra-ui/react'
import { Outlet, Link } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from '../../context/AuthContext';


export default function Layout({loggedin}) {
    const { user, logout } = useContext(AuthContext)


      function Page({loggedin}) {
    
            if (loggedin === true){
                console.log("login is true")
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
    
            else{
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
        <Box minHeight={"100vh"}>
            <header>
                <Box 
            p='4' 
            minHeight={"10vh"}
            bg="#FAF089"
            display="flex"
            >
                <Text p={1} as='b' borderRight='1px' w='5rem' fontSize='lg'>
                {user? <Link to='/mypage'>
                    Blog
                </Link> :
                    <Link to='/'>
                    Blog
                </Link>
                }
                
                </Text>
                <Spacer />
            <Page loggedin={loggedin}/>
            </Box>
            </header>
            <section>
                <Box
                    bg='#FFFFF0'
                    minHeight="80vh"
                    display='flex'
                    flexDirection='column'
                    alignItems='center'
                    justifyContent="center"
                    >
                    <Outlet />
                </Box>
            </section>
            
            <footer>
                <Box 
                minHeight="10vh"
                bg="#FAF089"
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                >
                    <Text> © Copyright 2025 Blog App</Text>
                </Box>
               
            </footer>
        </Box>

        </>
    )

}
