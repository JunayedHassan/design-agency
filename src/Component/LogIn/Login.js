import React, { useContext, useEffect, useState } from 'react';
import './Login.css';
import glogo from '../../images/g-logo.png';
import logo from '../../images/logos/creative-logo.png';
import { Link, useHistory, useLocation } from "react-router-dom";
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';


firebase.initializeApp(firebaseConfig)
const Login = () => {
    const [getadminEmail, setgetAdminEmail] = useState();

    useEffect(() => {
        fetch('https://dry-journey-91086.herokuapp.com/admins')
            .then(res => res.json())
            .then(data => {
                setgetAdminEmail(data);
            })
    }, [])
    // const adminEmail = ['adarshateam12@gmail.com', 'jon@gmail.com']
    const history = useHistory();
    const location = useLocation();
    // let { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const { displayName, email, photoURL } = result.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    pic: photoURL,
                }
                setLoggedInUser(signedInUser);

                for (let i = 0; i < getadminEmail.length; i++) {
                    const element = getadminEmail[i].adminEmail;
                    if (signedInUser.email === element) {
                        let { from } = { from: { pathname: "/admin" } };
                        history.replace(from);
                        break;
                    }
                    if (signedInUser.email !== element) {
                        let { from } = { from: { pathname: "/" } };
                        history.replace(from);
                    }
                }
            }).catch(function (error) {

            });
    }


    return (
        <div>
            <div className="d-flex justify-content-center mb-5" style={{ paddingTop: "70px" }}>
                <img src={logo} style={{ height: "70px" }} alt="" />
            </div>
            <div className=" d-flex justify-content-center align-items-center">
                <div style={{ paddingTop: "7%" }} className="login-form" >
                    <div className=" d-flex justify-content-center mb-3">
                        <h3 className="login-heading">Login With</h3>
                    </div>
                    <div onClick={handleSignIn} className="d-flex justify-content-center">
                        <div className="google-login row col-md-6">
                            <div className="mr-2">
                                <img style={{ height: '25px' }} src={glogo} alt="" />
                            </div>
                            <div>
                                <p>Continue with google</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-2">
                        <p>Don't Have an account?<span><a href="./login" style={{ color: "steelblue" }}>Create an account</a></span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;