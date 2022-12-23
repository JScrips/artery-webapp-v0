const HeroBanner = () => {
  //  STYLING OBJECT
  const styles = {
    container: "flex justify-center relative mt-28",
    leftCircle:
      "border border-black dark:border-white rounded-full h-[40rem] w-[35rem] mt-20 ",
    centerCircle:
      "border border-black dark:border-white rounded-full h-[50rem] w-[40rem] z-10 -ml-40 -mt-20 ",
    rightCircle:
      "border border-black dark:border-white rounded-full h-[40rem] w-[35rem] mt-20 -ml-40",
    heroMSGContainer: "justify-center flex pt-10",
    heroText: "text-white font-satisfy text-9xl",
    buttonContainer: "justify-center flex pt-20",
    button:
      "rounded-2xl border border-white py-2 px-10 text-6xl font-semibold text-white mt-10",
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.leftCircle}></div>
        <div className={styles.centerCircle}></div>
        <div className={styles.rightCircle}></div>
      </div>
      <div className={styles.heroMSGContainer}>
        <h3 className={styles.heroText}> ARTERY. We put the ART in HEART </h3>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button}> Enter </button>
      </div>
    </div>
  );
};

export default HeroBanner;
