/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js, jsx, ts, tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            backgroundImage: {
                'hero-banner': "url('IMGS/Homepage/hero-banner.jpg')",
                'hero-content': "url('IMGS/Homepage/benefit-content.jpg')",
                'hero-content-2': "url('IMGS/Homepage/hero-content-2.jpg')",
                'hero-content-3': "url('IMGS/Homepage/hero-content-3.jpg')",
                'hero-content-4': "url('IMGS/Homepage/hero-content-4.jpg')",
            },
            fontFamily: {
                satisfy: ['Satisfy', 'cursive'],
            },
        },
    },
    plugins: [],
}
