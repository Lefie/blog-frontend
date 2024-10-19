import "./Login.css"
import { Navbar } from "../../components/Navbar/Navbar";
import { LoginForm } from "../../components/LoginForm/LoginForm";

function Login() {

    return (
        <>
        <Navbar page="login"/>
        <LoginForm />
        </>
    )
}

export default Login;