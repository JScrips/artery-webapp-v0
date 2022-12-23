import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { useState } from "react";
import { AuthFunctions } from "../../Auth/AuthContext";
import SignOutButton from "../LoginComponents/SignOutButton";
import Link from "next/link";

const Navbar = () => {
  //Variables
  const [darkMode, setDarkMode] = useState(false);
  const { user } = AuthFunctions();

  // this darkMode variable will be used to toggle different dynamic elements within the Navbar depending on whether or not dark mode is enabled.

  //Styling
  const styles = {
    container: "flex",
    navStyles: "flex flex-col gap-10  text-white p-4 dark:text-gray-200",
    navLogo: "text-2xl",
    navLinksLayout: "flex gap-10 text-lg",
    navLoginButton:
      "py-1 px-3 rounded-xl border border-2 border-white bg-white text-black hover:bg-black hover:text-white",
    searchInput:
      "p-1 opacity-70 focus-within:opacity-100 px-3 rounded-xl border border-2 border-white flex bg-white items-center text-black focus-within:border focus-within:border-1 focus-within:border-black ",
    magnifyingGlass: "text-xl text-black text-opacity-50 mr-2 ",
    inputStyle: "focus:outline-none",
    darkModeStyle: "text-white text-xl",
    lightModeStyle: "text-yellow-500 text-xl",
  };

  //Methods

  //This method is used to toggle dark mode, and set the darkMode state to the opposite boolean. TailwindCSS utilizes class atrributes to apply darkmode, so this method simply adds the dark class to the root document element.
  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  return (
    <div className={styles.container}>
      <nav className={styles.navStyles}>
        <ul className={styles.navLinksLayout}></ul>
        <div className={styles.searchInput}>
          <AiOutlineSearch className={styles.magnifyingGlass} />
          <input className={styles.inputStyle} placeholder="Search Artery" />
        </div>
        <div>
          {user && user.email ? (
            user.email
          ) : (
            <button className={styles.navLinksLayout}>Guest </button>
          )}
        </div>
        <div className={styles.navLoginButton}> Submit Art</div>
        <button onClick={() => toggleDark()}>
          {" "}
          {darkMode ? (
            <BsSunFill className={styles.lightModeStyle} />
          ) : (
            <BsFillMoonFill className={styles.darkModeStyle} />
          )}{" "}
        </button>
        {user && user.email ? (
          <SignOutButton />
        ) : (
          <button className={styles.navLoginButton}>
            {" "}
            <Link href="/login"> Login </Link>
          </button>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
