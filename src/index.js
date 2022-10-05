import React, {useContext} from "react";
import { CurrentlyPlayingContextProvider } from "./CurrentlyPlayingContextProvider";
import ReactDOM from "react-dom";
import App from "./components/App";


ReactDOM.render(
        <CurrentlyPlayingContextProvider>
            <App />
        </CurrentlyPlayingContextProvider>,
        document.getElementById("root")
    );
