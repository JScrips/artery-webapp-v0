import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import Homepage from './components/Homepage/Homepage'
import ErrorPage from './components/ErrorHandling/ErrorPage'
import Test from './components/Test'
import Theme from './components/Styles/Theme'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Homepage />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/test',
                element: <Test />,
                errorElement: <ErrorPage />,
            },
        ],
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Theme>
            <RouterProvider router={router} />
        </Theme>
    </React.StrictMode>
)
