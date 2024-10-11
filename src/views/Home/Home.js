import "./Home.css"
import { Button,Stack,Box, Text } from '@chakra-ui/react'
import { Link } from "react-router-dom";


function Home() {
    return (
        <Box
            bg="#FAF089"
            height="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
        >
            <Stack spacing={3} align='center'>
                <Text borderBottom='1px' fontSize='8xl'>
                    Blog
                </Text>

                <Text fontSize='lg'>
                    Blog about anything
                </Text>

                <Stack direction='row' spacing={4} align='center'>
                    <Link to="/login">
                        <Button size="sm" colorScheme='green' variant='outline'>
                            Log in 
                        </Button>
                    </Link>
                    
                    <Link to="/signup">
                        <Button size="sm" colorScheme='green' variant='outline'>
                            Sign up
                        </Button>
                    </Link>

                    <Link to="/blogs">
                        <Button size="sm" colorScheme='green' variant='outline'>
                            Read
                        </Button>
                    </Link>
                </Stack>

            </Stack>
        </Box>
    );
  }
  
  export default Home;

