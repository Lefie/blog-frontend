import "./Signup.css"
import { Navbar } from "../../components/Navbar/Navbar";
import { SignupForm } from "../../components/SignupForm/SignupForm";

function Signup() {
    return (
        <>
        <Navbar page="not_logged_in"/>
        <SignupForm />
        </>
    )
}

export default Signup;