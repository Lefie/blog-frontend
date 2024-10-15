import "./Signup.css"
import { Navbar1 } from "../../components/Navbar/Navbar";
import { SignupForm } from "../../components/SignupForm/SignupForm";

function Signup() {
    return (
        <>
        <Navbar1 page="signup"/>
        <SignupForm />
        </>
    )
}

export default Signup;