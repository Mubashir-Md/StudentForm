import React from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { Route, Routes, useNavigate } from 'react-router-dom';
import StudentForm from './StudentForm';

const clientId = "811696054054-nh24gun8d32nri34ktv4q79ugaqq2fv5.apps.googleusercontent.com";

function GLogin() {

    const nav = useNavigate();

    function goForm(){
        nav("/form");
    }
    function goAdmin(){
        nav("/admin-login");
    }

    return (
        <div className='login'>
            <GoogleOAuthProvider clientId={clientId}>

                <GoogleLogin
                    onSuccess={credentialResponse => {
                        let creds = jwt_decode(credentialResponse.credential);
                        console.log(creds);
                    }}
                    onFailure={() => {
                        console.log('Login Failed');
                    }}
                    work_email={"@mjcollege.ac.in"}
                />

            </GoogleOAuthProvider>
            <button onClick={goForm}>Go to form </button>
            <button onClick={goAdmin}>Go to Admin </button>
        </div>
    )
}

export default GLogin;
