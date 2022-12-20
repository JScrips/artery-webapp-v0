import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { BrowserRouter } from 'react-router-dom'

import App from './App'
import Theme from './components/Styles/Theme'
import { AuthContextProvider } from './AuthContext/AuthContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <AuthContextProvider>
            <BrowserRouter>
                <Theme>
                    <App />
                </Theme>
            </BrowserRouter>
        </AuthContextProvider>
    </React.StrictMode>
)
