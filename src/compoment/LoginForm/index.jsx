import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Link, useNavigate , useParams } from 'react-router-dom';
import bgImg from '../../img/img1.jpg';

import axios from "axios";
import Signin from './Signin';
import Signup from './Signup';
import "./styles.css";

function LoginForm(props) {
    const navigate = useNavigate();
    const { isStateLogin } = useParams();
    const [isActive, setIsActive] = useState(isStateLogin === 'signup');


    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if(user){
            navigate("/")
        }
      }, [navigate]);

    const isShowSignup = () => {
        setIsActive(!isActive);
    };

    const handleLoginSignin = (val) => {
        const {
            email,
            password
        }= val;
        if(!email || !password){
            alert("Email or password Empty !!!");
        }
        else{
            const data = {
                email : email,
                password : password
            }
            localStorage.setItem('user', JSON.stringify(data));
            alert("Login Success!!!");
            navigate("/");
        }

    };


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
        if(password == confirm_password){
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
            <div
                className={
                    isActive ? 'container right-panel-active' : 'container'
                }
            >
                <Signup onSubmit={handleLoginSignup} />
                <Signin
                    onSubmit={handleLoginSignin}
                   
                />

                <div className="form__overlay-container">
                    <div className="form__overlay">
                        <div className="form__overlay-panel form__overlay-left" >
                            <button
                                className="form__btn__ghost"
                                onClick={isShowSignup}
                            >
                                <Link to="/auth/signin">Sign In</Link>
                            </button>
                           
                        </div>
                        <div className="form__overlay-panel form__overlay-right">
                            <button
                                className="form__btn__ghost"
                                onClick={isShowSignup}
                            >
                                <Link to="/auth/signup">Sign Up</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

LoginForm.propTypes = {};

export default LoginForm;
