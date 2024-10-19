import "./Blogs.css"
import { Navbar } from "../../components/Navbar/Navbar";
import { AuthContext } from '../../context/AuthContext';
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Blogs() {

    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    
    return (
        <>
        <Navbar page="blogs"/>
        <p>You are reading all the blog titles </p>
        </>
    )
}

export default Blogs;