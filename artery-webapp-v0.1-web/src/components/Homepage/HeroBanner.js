const HeroBanner = () => {
    return (
        <div>
            <div className="flex justify-center  relative p-6">
                <div className="border border-black dark:border-white rounded-full h-[40rem] w-[35rem] mt-20 bg-hero-content-3 bg-cover"></div>
                <div className="border border-black dark:border-white rounded-full h-[50rem] w-[40rem] z-10 -ml-40 -mt-20 bg-hero-content-4 bg-cover bg-center bg-no-repeat "></div>
                <div className="border border-black dark:border-white rounded-full h-[40rem] w-[35rem] mt-20 -ml-40 bg-hero-content-2 bg-cover"></div>
            </div>
            <div className="justify-center flex pt-10">
                <h3 className="text-white font-bold text-5xl">
                    {' '}
                    ARTERY. We put the ART in HEART{' '}
                </h3>
            </div>
            <div className="justify-center flex pt-20">
                <button className="rounded-2xl border border-white py-2 px-10 text-6xl font-semibold text-white">
                    {' '}
                    Enter{' '}
                </button>
            </div>
        </div>
    )
}

export default HeroBanner
