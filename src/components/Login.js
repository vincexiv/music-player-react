import React, {useState, useRef, useContext, useEffect} from "react";
import {useNavigate} from 'react-router-dom'
import { apiHost } from "../variables";
import { songDetails } from "../SongDetailsContextProvider";
import {divStyle, h1Style, formStyle, inputStyle, inputLabelStyle, inputParentStyle, buttonStyle, validityStatusStyle} from '../react_styles/login-styles'

function Login(){
    const {userDetails, setUserDetails} = useContext(songDetails)
    const [formData, setFormData] = useState({username: "", password: ""})
    const navigate = useNavigate()
    const [validityState, setValidityState] = useState({isValid: true, message: ""})


    function handleInputChange(event){

        if(event.target.name === "username"){
            const usernameIsValid =  /^[A-Za-z0-9]*$/.test(event.target.value)
            setValidityState({
                isValid: usernameIsValid,
                message: usernameIsValid? "" : "name should only contain alphanumeric characters"
            })
        }
        setFormData(formData => ({...formData, [event.target.name]: event.target.value}))
    }

    function someInputsAreEmpty(formData){
        return !formData.username.length && !formData.password.length
    }


    function handleLogin(event){
        event.preventDefault()
        
        if(someInputsAreEmpty(formData)){
            setValidityState({isValid: false, message: "name/email cannot be blank"})
            
        }else if(validityState.isValid){
            setValidityState({isValid: false, message: "Loading..."})
            fetch(`${apiHost}/users?username=${formData.username}&password=${formData.password}`)
            .then(result => result.json())
            .then(data => {
                console.log("ddata awe got back: ", data)
                if(Boolean(data[0])){
                    setUserDetails({isLoggedIn: true, userDetails: data[0]})
                    localStorage.setItem("userDetails", JSON.stringify({isLoggedIn: true, userDetails: data[0]}))
                    navigate("/home")
                }else{
                    setValidityState({isValid: false, message: "error in email or password"})
                }
            })
        }
    }


    return (
        <div style={divStyle}>
            <div className="container">
                <form style={formStyle} onSubmit={handleLogin}>
                    <h1 style={h1Style}>Have an account?</h1>
                    
                    {validityState.isValid ? <></> :
                        <p style={validityStatusStyle}>
                            {validityState.message}
                        </p>
                    }

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