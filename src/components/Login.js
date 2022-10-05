import React from "react";

function Login(){

    const divStyle = {
        width: "100%",
        height: "calc(100vh - 4rem)",
        overflow: "hidden",
        backgroundImage: "url('./assets/images/cassettes(smaller).png')",
        position: "relative"
    }

    const h1Style = {
        margin: "1rem"
    }

    const formStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "22rem",
        color: "var(--color-1)",
        position: "absolute",
        bottom: "50%",
    }

    const inputStyle = {
        border: "none",
        outline: "none",
        fontSize: "1rem",
        color: "var(--color-3)",
        margin: "1rem",
        padding: "0.2rem",
        width: "12rem"
    }

    const inputLabelStyle = {
        width: "8rem",
        margin: "1rem"
    }

    const inputParentStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }

    const buttonStyle = {
        outline: "var(--color-1)",
        color: "white",
        padding: "0.5rem",
        margin: "1rem"
    }

    return (
        <div style={divStyle}>
            <div className="container">
                <form style={formStyle}>
                    <h1 style={h1Style}>Have an account?</h1>
                    <div style={inputParentStyle}>
                        <label for="username" style={inputLabelStyle}>Username</label>
                        <input type="text" name="username" style={inputStyle}/>
                    </div>
                    <div style={inputParentStyle}>
                        <label for="password" style={inputLabelStyle}>Password</label>
                        <input type="text" name="password" style={inputStyle}/>
                    </div>
                    <input type="submit" value="SIGN IN" className="btn" style={buttonStyle}/>
                </form>
            </div>
        </div>
    )
}

export default Login