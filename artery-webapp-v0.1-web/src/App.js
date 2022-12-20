import { Route, Routes } from 'react-router-dom'

import Homepage from './components/Homepage/Homepage'
import LoginPage from './components/LoginPage/LoginPage'
import ErrorPage from './components/ErrorHandling/ErrorPage'

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}

export default App
