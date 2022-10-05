const divStyle = {
    width: "100%",
    height: "calc(100vh - 4rem)",
    overflow: "hidden",
    backgroundImage: "url('./assets/images/cassettes.png')",
    position: "relative"
}

const h1Style = {
    margin: "1rem",
    textAlign: "center",
    textShadow: "0.1rem 0.1rem 0.1rem white",
    border: "solid white 0.1rem",
    boxShadow: "0.1rem 0.1rem 0.1rem black"
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

const validityStatusStyle = {
    color: "var(--color-1)",
    border: "solid white 0.1rem",
    textShadow: "0.1rem 0.1rem 0.1rem white",
    margin: "1rem",
    padding: "0.2rem",
    boxShadow: "0.1rem 0.1rem 0.1rem black",
    textAlign: "center"
}

const inputStyle = {
    border: "none",
    outline: "none",
    fontSize: "1rem",
    color: "var(--color-3)",
    margin: "1rem",
    padding: "0.2rem",
    width: "12rem",
    boxShadow: "0.1rem 0.1rem 0.1rem black"
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

export {divStyle, h1Style, formStyle, inputStyle, inputLabelStyle, inputParentStyle, buttonStyle, validityStatusStyle}