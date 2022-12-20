const BenefitContent = () => {
    return (
        <section class="relative pt-2 pb-16">
            <div class="container px-4 mx-auto">
                <div class="h-112 mb-16">
                    <img
                        class="w-full h-full object-cover object-top rounded-lg"
                        src="/benefit-content.jpg"
                        alt=""
                    />
                </div>
                <div class="max-w-2xl mx-auto mb-16 text-center">
                    <h2 class="mb-10 text-6xl font-semibold font-heading">
                        We{' '}
                        <span className="text-teal-500 underline decoration-blue-500 decoration-4 ">
                            EMPOWER
                        </span>{' '}
                        Artists and Creations .
                    </h2>
                    <div class="flex items-center justify-center"></div>
                </div>
            </div>
        </section>
    )
}

export default BenefitContent
