import Footer from "./Footer";
import Navbar from "./Navbar";
import Image from "next/image";
import BG from "../../public/backgroundPattern.jpg";

const Theme = ({ children }) => {
  const styles = {
    mainStyle: "min-h-screen",
    container: "bg-green-800 dark:bg-neutral-900 p-10 relative",
    appContainer:
      "rounded-3xl bg-opacity-70 border  bg-neutral-900 border-white border-opacity-50 relative",
  };
  return (
    <div className={styles.container}>
      <Image src={BG} alt="Background Image" className="" fill="true" />
      <div className={styles.appContainer}>
        <div className="flex">
          <Navbar />
          <div className="flex-col flex justify-center items-center">
            <main className={styles.mainStyle}> {children} </main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theme;