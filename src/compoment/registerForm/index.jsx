import React, { useEffect, } from 'react';
import { useNavigate  } from 'react-router-dom';



import Signup from './Signup/index';
import Navbar from '../navbar/Navbar'

import "./styles.css";

function LoginForm(props) {
    const navigate = useNavigate();
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if(user){
            navigate("/")
        }
      }, [navigate]);

    const handleLoginSignup = (val) => {
        const {
            fullname,
            email,
            password,
            confirm_password
        }= val;
        if(!fullname, !email || !password || !confirm_password){
            alert("Email or password Empty !!!");
            return;
        }
        if(password === confirm_password){
            const data = {
                fullName: fullname,
                email : email,
                password : password
            }
            localStorage.setItem('user', JSON.stringify(data));
            alert("Register Success!!!");
            navigate("/");

            
        }else{
            alert("Confirm password failed!!!")
        }
    };
    return (
        <div className="form">
            <Navbar/>
            <div
                className='register'
            >
                <Signup onSubmit={handleLoginSignup} />
            </div>
         
        </div>
    );
}

LoginForm.propTypes = {};

export default LoginForm;
