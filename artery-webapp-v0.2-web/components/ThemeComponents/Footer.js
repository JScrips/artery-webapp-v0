const Footer = () => {
  const styles = {
    container: "text-white",
    wrapper: "pt-2 pb-2",
    secondWrap: "container px-4 mx-auto",
    centerText: "text-center",
    paraBrace: "max-w-3xl mx-auto text-gray-400 text-xs font-light",
  };
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.secondWrap}>
          <div className={styles.centerText}>
            <p className={styles.paraBrace}>
              Cookies are important to the proper functioning of a site. To
              improve your experience, we use cookies to remember log-in details
              and provide secure log-in, collect statistics to optimize site
              functionality, and deliver content tailored to your interests...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
