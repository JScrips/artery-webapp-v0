const Footer = () => {
    return (
        <section className="">
            <div class="pt-2 pb-2 bg-teal-500">
                <div class="container px-4 mx-auto">
                    <div class="flex flex-wrap items-start xl:items-center justify-center">
                        <div class="w-1/2 xl:w-auto flex flex-wrap items-center justify-center xl:-mb-6">
                            <button
                                class="inline-block w-full lg:w-auto text-sm mb-6 mr-14"
                                href=""
                            >
                                Collection
                            </button>
                            <button
                                class="inline-block w-full lg:w-auto text-sm mb-6 mr-14"
                                href="#"
                            >
                                Projects
                            </button>
                            <button
                                class="inline-block w-full lg:w-auto text-sm mb-6 mr-14"
                                href="#"
                            >
                                About
                            </button>
                            <div class="w-full lg:w-auto md:mr-64 mb-6">
                                <button
                                    class="inline-block text-sm w-full sm:w-auto relative"
                                    href=""
                                ></button>
                            </div>
                        </div>
                        <div class="w-1/2 xl:w-auto flex flex-wrap items-center justify-center">
                            <button
                                class="inline-block w-full lg:w-auto text-sm mb-6 mr-14"
                                href="#"
                            >
                                Plans
                            </button>
                            <button
                                class="inline-block w-full lg:w-auto text-sm mb-6 mr-14"
                                href="#"
                            >
                                How to Start
                            </button>
                            <button
                                class="inline-block w-full lg:w-auto text-sm mb-6"
                                href="#"
                            >
                                Download
                            </button>
                        </div>
                    </div>

                    <div class="text-center">
                        <p class="max-w-3xl mx-auto text-gray-400 text-xs font-light">
                            Cookies are important to the proper functioning of a
                            site. To improve your experience, we use cookies to
                            remember log-in details and provide secure log-in,
                            collect statistics to optimize site functionality,
                            and deliver content tailored to your interests...
                        </p>
                        <span class="text-gray-700">
                            I already have an account
                        </span>
                        <button
                            class="ml-4 inline-flex items-center font-medium text-green-900 hover:text-green-800"
                            href="#"
                        >
                            <span class="mr-2">Sign in</span>
                            <svg
                                width="14"
                                height="11"
                                viewBox="0 0 14 11"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7.89471 0L6.81484 0.972812L11.0771 4.8125L0 4.8125L0 6.1875L11.0771 6.1875L6.81484 10.0272L7.89471 11L14 5.5L7.89471 0Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
