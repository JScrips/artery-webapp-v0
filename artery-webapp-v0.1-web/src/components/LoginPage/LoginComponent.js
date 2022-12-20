import { useState } from 'react'
import { AuthFunctions } from '../../AuthContext/AuthContext'

const LoginComponent = ({ setShowLogin }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signInUser } = AuthFunctions()

    const handleLogin = (e, email, password) => {
        e.preventDefault()
        signInUser(email, password)
    }
    return (
        <main className="flex flex-col items-center rounded-t-xl ">
            <div className=" p-2 text-center font-satisfy text-teal-500 text-4xl">
                {' '}
                Login Page
            </div>
            <input
                className="border p-2 focus:outline-none mt-2 mb-2"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                className="border p-2   focus:outline-none"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                onClick={(e) => {
                    handleLogin(e, email, password)
                }}
                className=" px-4 py-1 bg-blue-600 rounded-lg text-white p-2 mt-4"
            >
                {' '}
                Login{' '}
            </button>
            <div className="flex items-center mt-6 gap-2">
                <span> Don't have an account?</span>{' '}
                <button
                    onClick={() => {
                        setShowLogin((prevState) => !prevState)
                    }}
                >
                    {' '}
                    Sign up.
                </button>
            </div>
        </main>
    )
}

export default LoginComponent
