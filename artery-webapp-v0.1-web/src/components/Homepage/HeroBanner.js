const HeroBanner = () => {
    const styles = {
        heroBanner:
            'w-full h-96 bg-teal-500 bg-cover bg-center flex justify-center items-center bg-hero-banner',
        heroWordBg:
            'items-center py-32 px-60 bg-neutral-900 rounded-xl opacity-80 text-white',
    }

    return (
        <div className={styles.heroBanner}>
            <div className="flex gap-20">
                <div className={styles.heroWordBg}>Artery</div>
                <div className={styles.heroWordBg}> Another Box </div>
            </div>
        </div>
    )
}

export default HeroBanner
