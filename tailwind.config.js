/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                'primary': '#53c28b',
                'secondary': '#49b07d',
                'tertiary': '#bbb',
                'quaternary': '#eee',
                'custom-rgb': 'rgb(61, 61, 61)',
                'custom-auth': 'rgba(228, 97, 50, 0.72)',
                'custom-auth-hover': 'rgba(228, 97, 50, 0.803)',
            }
        },
    },
    plugins: [],
}
