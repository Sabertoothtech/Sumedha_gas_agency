import React, { useState, useEffect } from 'react'
import logo from "./logo.png";
import { useHistory,Redirect } from 'react-router';
import { LoginAPI } from '../../Utils/utils';
import axios from 'axios';
import './Login.css'

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const loginBtnClick = async () => {
        
        if (email === "" || password === "") {
            setError("All Field are required")
        } else {
            const config = {
                url: LoginAPI,
                method: 'POST',
                data: {
                    email: email,
                    password: password
                }
            }
            await axios(config)
                .then((res) => { 
                    
                    if(res.data.token){
                        sessionStorage.setItem('token',res.data.token)
                    }
                    history.push('/setting')
             })
                .catch((err) => { setError(err.response.data[0].message) })
        }
    
    }
    return (
        <>
            <div className="container">

                <div className="box">
                    <div className="logo_box">
                        <div className="logo_img">
                            <img src={logo} alt="logo" />
                            <h3 style={{ color: "	#000080", fontSize: "30px" }}>SUMEDHA</h3>
                        </div>
                    </div>
                    <strong style={{ color: "red", fontSize: "10px" }}>{error}</strong>
                    <div className="input_box">
                        <label htmlFor="">UserName</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="text" name="email" />
                        <label htmlFor="">Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" name="pass" />
                    </div>
                    <button onClick={loginBtnClick} style={{ backgroundColor: "#000080", color: "white" }}>
                        Login
                    </button>
                </div>
            </div>
        </>
    )
}

export default Login
