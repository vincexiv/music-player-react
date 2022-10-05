import React, {useState, useRef, useContext} from "react";
import {useNavigate} from 'react-router-dom'
import { apiHost } from "../variables";
import { songDetails } from "../SongDetailsContextProvider";
import {divStyle, h1Style, formStyle, inputStyle, inputLabelStyle, inputParentStyle, buttonStyle} from '../react_styles/login-styles'

function Login(){
    const {userDetails, setUserDetails} = useContext(songDetails)
    const [formData, setFormData] = useState({username: "", password: ""})
    const navigate = useNavigate()
    const isValidUsername = useRef(true)

    function handleInputChange(event){

        if(event.target.name === "username"){
            isValidUsername.current = /^[A-Za-z0-9]*$/.test(event.target.value);
        }
        setFormData(formData => ({...formData, [event.target.name]: event.target.value}))
    }


    function handleLogin(event){
        event.preventDefault()

        if(isValidUsername.current){
            fetch(`${apiHost}/users?username=${formData.username}&password=${formData.password}`)
                .then(result => result.json())
                .then(data => {
                    if(data){
                        setUserDetails({isLoggedIn: true, userDetails: data})
                        navigate("/home")
                    }
                })
        }
    }


    return (
        <div style={divStyle}>
            <div className="container">
                <form style={formStyle} onSubmit={handleLogin}>
                    <h1 style={h1Style}>Have an account?</h1>
                    
                    {isValidUsername.current ? <></> : <p style={{color: "red", margin: "0.5rem", padding: "1rem"}}>
                            name should only contain alphanumeric characters</p>}

                    <div style={inputParentStyle}>
                        <label for="username" style={inputLabelStyle}>Username</label>
                        <input type="text" name="username" style={inputStyle} value={formData.username} onChange={(event)=>handleInputChange(event)}/>
                    </div>
                    <div style={inputParentStyle}>
                        <label for="password" style={inputLabelStyle}>Password</label>
                        <input type="password" name="password" style={inputStyle} value={formData.password} onChange={(event)=>handleInputChange(event)}/>
                    </div>
                    <input type="submit" value="SIGN IN" className="btn" style={buttonStyle}/>
                </form>
            </div>
        </div>
    )
}

export default Login