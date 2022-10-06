import React, {useState, useRef, useContext, useEffect} from "react";
import {useNavigate} from 'react-router-dom'
import { apiHost } from "../variables";
import { songDetails } from "../SongDetailsContextProvider";
import {divStyle, h1Style, formStyle, inputStyle, inputLabelStyle, inputParentStyle, buttonStyle, validityStatusStyle} from '../react_styles/login-styles'

function SignUp(){
    const {setUserDetails} = useContext(songDetails)
    const usernameInput = useRef()
    const [formData, setFormData] = useState({username: "",email: "", password: "", passwordConfirm: ""})
    const navigate = useNavigate()
    const [validityState, setValidityState] = useState({isValid: true, message: ""})


    function handleInputChange(event){

        const usernameIsValid =  /^[A-Za-z0-9]*$/.test(usernameInput.current.value)
        setValidityState({
            isValid: usernameIsValid,
            message: usernameIsValid? "" : "name should only contain alphanumeric characters"
        })

        setFormData(formData => ({...formData, [event.target.name]: event.target.value}))
    }

    function someInputsAreEmpty(formData){
        return !formData.username.length || !formData.email.length || !formData.password.length || !formData.passwordConfirm.length
    }


    function passwordsAreNotSame(formData){
        return formData.password !== formData.passwordConfirm
    }


    function handleSignup(event){
        event.preventDefault()
        
        if(someInputsAreEmpty(formData)){
            setValidityState({isValid: false, message: "input fields cannot be blank"})    
        }else if(passwordsAreNotSame(formData)){
            setValidityState({isValid: false, message: "your input passwords are not the same"})           
        }else if(validityState.isValid){
            fetch(`${apiHost}/users?username=${formData.username}`)
            .then(result => result.json())
            .then(data => {
                if(data[0]){
                    console.log("data we are getting back", data[0])
                    setValidityState({isValid: false, message: "username is taken. try a different one"})           
                }else {
                    setValidityState({isValid: false, message: "Loading..."})
                    fetch(`${apiHost}/users`, {
                        method: 'POST',
                        headers: {"Content-Type": 'application/json', 'Accept': 'application/json'},
                        body: JSON.stringify(
                            {
                                username: formData.username,
                                email: formData.email,
                                password: formData.password
                            }
                        )
                    })
                    .then(result => result.json())
                    .then(data => {
                        navigate("/login")                
                    })
                }
            })
        }
    }

    console.log(validityState)

    function handleSigninClick(event){
        navigate("/login")
    }

    return (
        <div style={divStyle}>
            <div className="container">
                <form style={{...formStyle, bottom: "30%"}} onSubmit={handleSignup}>
                    <h1 style={h1Style}>Create Account</h1>
                    
                    {validityState.isValid ? <></> :
                        <p style={validityStatusStyle}>
                            {validityState.message}
                        </p>
                    }
                    <div style={inputParentStyle}>
                        <label for="username" style={inputLabelStyle}>Username</label>
                        <input type="text" name="username" ref={usernameInput} style={inputStyle} value={formData.username} onChange={(event)=>handleInputChange(event)}/>
                    </div>
                    <div style={inputParentStyle}>
                        <label for="email" style={inputLabelStyle}>Email</label>
                        <input type="email" name="email" style={inputStyle} value={formData.email} onChange={(event)=>handleInputChange(event)}/>
                    </div>                    
                    <div style={inputParentStyle}>
                        <label for="password" style={inputLabelStyle}>Password</label>
                        <input type="password" name="password" style={inputStyle} value={formData.password} onChange={(event)=>handleInputChange(event)}/>
                    </div>
                    <div style={inputParentStyle}>
                        <label for="passwordConfirm" style={inputLabelStyle}>Confirm Password</label>
                        <input type="password" name="passwordConfirm" style={inputStyle} value={formData.passwordConfirm} onChange={(event)=>handleInputChange(event)}/>
                    </div>                    
                    <input type="submit" value="SIGN UP" className="btn" style={buttonStyle}/>
                    <button className="btn" style={{...buttonStyle, backgroundColor: "var(--color-1)"}} onClick={handleSigninClick}>GO TO SIGN IN</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp