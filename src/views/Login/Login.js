import "./Login.css"
import { Navbar1 } from "../../components/Navbar1/Navbar1";
import { LoginForm } from "../../components/LoginForm/LoginForm";

function Login() {

    return (
        <>
        <Navbar1 page="login"/>

        <LoginForm />
        </>
    )
}

export default Login;