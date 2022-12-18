import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import ErrorPage from './components/ErrorHandling/ErrorPage'
import Test from './components/Test'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
    },
     {
        path: "/test",
        element:< Test />,
        errorElemetn: <ErrorPage />
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
