import React from "react";
import { SongDetailsContextProvider } from "./SongDetailsContextProvider";
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from "./components/App";


const root = createRoot(document.getElementById('root'))
root.render(
    <SongDetailsContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </SongDetailsContextProvider>,    
)

