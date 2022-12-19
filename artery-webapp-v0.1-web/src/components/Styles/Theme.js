import Footer from './Footer'
import Navbar from './Navbar'

const Theme = ({ children }) => {
    const styles = {
        mainStyle: 'min-h-screen',
    }
    return (
        <div>
            <Navbar />
            <main className={styles.mainStyle}> {children} </main>
            <Footer />
        </div>
    )
}

export default Theme
