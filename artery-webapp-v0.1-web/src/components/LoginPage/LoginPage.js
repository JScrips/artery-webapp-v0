import SignUpComponent from './SignUpComponent'
import LoginComponent from './LoginComponent'
import { useState } from 'react'

const LoginPage = () => {
    const [showLogin, setShowLogin] = useState(true)
    return (
        <main className="p-4 w-2/12  border bg-slate-100 flex flex-col items-center justify-center mx-auto rounded-xl">
            {showLogin ? (
                <LoginComponent setShowLogin={setShowLogin} />
            ) : (
                <SignUpComponent setShowLogin={setShowLogin} />
            )}
        </main>
    )
}
export default LoginPage
