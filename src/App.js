import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

function App() {
    return <>This is the Home Component. Enjoy 
    
    <div> <Outlet/> </div>
    </>
}

export default App
