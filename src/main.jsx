import React from 'react';
import App from './App.jsx';
import './index.css';
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { GlobalContextProvider } from "./contexts/GlobalContext.jsx";
import { DarkModeProvider } from './contexts/DarkModeContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
    <DarkModeProvider>
        <GlobalContextProvider>
            <BrowserRouter >
                <App />
            </BrowserRouter>
        </GlobalContextProvider >
    </DarkModeProvider>

)
