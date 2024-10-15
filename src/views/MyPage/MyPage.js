import "./MyPage.css"
import { AuthContext } from '../../context/AuthContext';
import { useContext } from "react";
import { Navbar1 } from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";


function MyPage() {

    const { user, logout } = useContext(AuthContext)
    const navigate = useNavigate()
    
    console.log(user, "from my page")
    const View = () => {

        if(!user){
            navigate("/login")
        }
        if(user){
            return<>
                <h1>Welcome {user.username} !</h1>
            </>
        }
    }
    return (
        <>
        <Navbar1 page='loggedin'/>
        <View />
        </>
    )
}

export default MyPage;