import LoginForm from "../../compoment/LoginForm";
import { Link } from "react-router-dom";
import './loginPage.css'
export default function LoginPage(){
    return(
        <div className="background">
            <LoginForm />
            <div className='register'>
             <Link to={'/auth/sigup'}>Register</Link>
        </div>
        </div>
    )
}