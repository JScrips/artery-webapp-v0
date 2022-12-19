/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js, jsx, ts, tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'hero-banner': "url('IMGS/Homepage/hero-banner.jpg')",
            },
        },
    },
    plugins: [],
}
