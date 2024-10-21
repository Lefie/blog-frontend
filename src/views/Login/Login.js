import "./Login.css"
import { Navbar } from "../../components/Navbar/Navbar";
import { LoginForm } from "../../components/LoginForm/LoginForm";

function Login() {

    return (
        <>
        <Navbar page="not_logged_in"/>
        <LoginForm />
        </>
    )
}

export default Login;