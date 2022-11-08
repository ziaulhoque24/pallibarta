/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        
        "./pages/**/*.{html,js}",
        "./components/**/*.{html,js}",
        "./GlobalFunction/**/*.{html,js}"

],
    theme: {
        extend: {

            colors: {
                myColor: '#1645A1',
                secondColor: "#F99D1C",
                warning: "#ffc700",
                theme: "#FFFBEC",
            },
            container: {
                center: true,
                padding: "1rem"
            },
            screens: {
                'sm': '576px',

                'md': '768px',

                'lg': '992px',

                'xl': '1200px',

                '2xl': '1400px',

            }

        },
    },
    plugins: [],
}