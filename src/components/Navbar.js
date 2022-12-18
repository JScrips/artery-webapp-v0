import { RiHeartPulseFill } from 'react-icons/ri'

const Navbar = () => {
    const styles = {
        navStyles:
            'flex justify-around border border-2 p-4 items-center bg-teal-500 text-white',
        navLogo: 'text-6xl',
        navLinksLayout: 'flex gap-36',
        navLoginButton:
            'py-2 px-6 rounded-xl border border-2 border-white bg-white text-black hover:bg-black hover:text-white',
    }

    return (
        <nav className={styles.navStyles}>
            <div>
                <RiHeartPulseFill className={styles.navLogo} />
            </div>
            <ul className="flex gap-36">
                <li>
                    <a> Home </a>
                </li>
                <li>
                    <a> Search </a>
                </li>
                <li>
                    <a> Pending </a>
                </li>
                <li>
                    <a> Profile </a>
                </li>
            </ul>
            <div className={styles.navLoginButton}> Login</div>
        </nav>
    )
}

export default Navbar
