import React from "react";
import { SongDetailsContextProvider } from "./SongDetailsContextProvider";
import ReactDOM from "react-dom";
import App from "./components/App";


ReactDOM.render(
        <SongDetailsContextProvider>
            <App />
        </SongDetailsContextProvider>,
        document.getElementById("root")
    );
