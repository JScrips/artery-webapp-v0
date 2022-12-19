import { RiHeartPulseFill } from 'react-icons/ri'
import { AiOutlineSearch } from 'react-icons/ai'

const Navbar = () => {
    const styles = {
        navStyles:
            'flex justify-around items-center bg-teal-500 text-white p-1',
        navLogo: 'text-2xl',
        navLinksLayout: 'flex gap-10 text-lg',
        navLoginButton:
            'py-1 px-3 rounded-xl border border-2 border-white bg-white text-black hover:bg-black hover:text-white',
        searchInput:
            'p-1 opacity-70 focus-within:opacity-100 px-3 rounded-xl border border-2 border-white flex bg-white items-center text-black focus-within:border focus-within:border-1 focus-within:border-black ',
        magnifyingGlass: 'text-xl text-black text-opacity-50 mr-2 ',
        inputStyle: 'focus:outline-none',
    }

    return (
        <nav className={styles.navStyles}>
            <div>
                <RiHeartPulseFill className={styles.navLogo} />
            </div>
            <ul className={styles.navLinksLayout}>
                <li>
                    <a> Home </a>
                </li>
                <li>
                    <a> Profile </a>
                </li>
            </ul>
            <div className={styles.searchInput}>
                <AiOutlineSearch className={styles.magnifyingGlass} />
                <input
                    className={styles.inputStyle}
                    placeholder="Search Artery"
                />
            </div>

            <button className={styles.navLinksLayout}> Sign Up / In </button>
            <div className={styles.navLoginButton}> Submit Art</div>
        </nav>
    )
}

export default Navbar
