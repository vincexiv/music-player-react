const divStyle = {
    width: "100%",
    height: "calc(100vh - 4rem)",
    overflow: "hidden",
    backgroundImage: "url('./assets/images/cassettes.png')",
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

export {divStyle, h1Style, formStyle, inputStyle, inputLabelStyle, inputParentStyle, buttonStyle}