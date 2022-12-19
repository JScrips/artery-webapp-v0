import { RiNetflixFill } from 'react-icons/ri'
import { SiNike, SiAmazon } from 'react-icons/si'
import { BsSpotify, BsApple } from 'react-icons/bs'
import { FaCcStripe } from 'react-icons/fa'

const LogoStrip = () => {
    return (
        <section class="py-6 bg-white">
            <div class="container px-4 mx-auto">
                <div class="max-w-6xl mx-auto">
                    <div class="flex flex-wrap items-center -mx-4 -mb-8">
                        <div class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/6 px-4 mb-8">
                            <div class="flex items-center justify-center px-6 h-36 border-2 border-black shadow rounded-md">
                                <RiNetflixFill className="text-8xl" />
                            </div>
                        </div>
                        <div class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/6 px-4 mb-8">
                            <div class="flex items-center justify-center px-6 h-36 border-2 border-black shadow rounded-md">
                                <SiNike className="text-9xl" />
                            </div>
                        </div>
                        <div class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/6 px-4 mb-8">
                            <div class="flex items-center justify-center px-6 h-36 border-2 border-black shadow rounded-md">
                                <BsSpotify className="text-8xl" />
                            </div>
                        </div>
                        <div class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/6 px-4 mb-8">
                            <div class="flex items-center justify-center px-6 h-36 border-2 border-black shadow rounded-md">
                                <SiAmazon className="text-8xl" />
                            </div>
                        </div>
                        <div class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/6 px-4 mb-8">
                            <div class="flex items-center justify-center px-6 h-36 border-2 border-black shadow rounded-md">
                                <FaCcStripe className="text-8xl" />
                            </div>
                        </div>
                        <div class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/6 px-4 mb-8">
                            <div class="flex items-center justify-center px-6 h-36 border-2 border-black shadow rounded-md">
                                <BsApple className="text-8xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LogoStrip
