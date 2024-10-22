import { authors } from "../../utils/all_authors"
import { useEffect, useState } from "react"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { Navbar } from "../../components/Navbar/Navbar"
import { Text, Box } from "@chakra-ui/react"
import { Link } from "react-router-dom"


export const Authors = () => {
    const [allAuthors, setAllAuthors] = useState(null)
    const { user } = useContext(AuthContext)

    useEffect(()=>{
        async function fetchAuthors(){
            const all_authors = await authors()
            if(all_authors){
                setAllAuthors(all_authors)
            }
        }
        fetchAuthors()
    },[])

    const WhichNavbar = () => {
        if(user){
            return <Navbar page ='loggedin'/>
        }else{
            return <Navbar page='not_logged_in' />
        }
    }

    const EachAuthor = () => {
        if(allAuthors){
            return <ul>
                {
                allAuthors.map(
                    (author)=>
                    <>
                    <Link class='link' to ={`/blogs/author/${author}`} >
                    {author}
                    </Link>
                    <br/>
                    </>)}
            
            </ul>
        }
    }

    return <>
        <WhichNavbar />
        <Box p={8}>
            <Text fontSize='3xl'>Authors</Text>
            <EachAuthor />
        </Box>
    </>

    


}