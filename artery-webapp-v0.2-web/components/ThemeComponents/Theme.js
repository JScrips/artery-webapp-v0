import Footer from "./Footer";
import Navbar from "./Navbar";
import Image from "next/image";
import BG from "../../public/backgroundPattern.jpg";

const Theme = ({ children }) => {
  const styles = {
    mainStyle: "min-h-screen p-20",
    container: "bg-green-800 dark:bg-neutral-900 p-10 relative",
    appContainer:
      "rounded-3xl bg-opacity-70 border  bg-neutral-900 border-white border-opacity-50 relative",
  };

  return (
    <div className={styles.container}>
      <Image src={BG} alt="Background Image" className="" fill="true" />
      <div className={styles.appContainer}>
        <Navbar />
        <main className={styles.mainStyle}> {children} </main>
        <Footer />
      </div>
    </div>
  );
};

export default Theme;
