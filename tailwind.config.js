import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */

export default {
    content: ['./index.html', './src/**/*.{html,js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                ...colors,
                'primary-950': '#0078F0',
                'primary-900': '#2693FF',
                'primary-800': '#3399FF',
                'primary-700': '#42A1FF',
                'primary-600': '#42A1FF',
                'primary-500': '#52A9FF',
                'primary-400': '#80C0FF',
                'primary-300': '#80C0FF',
                'primary-200': '#C2E1FF',
                'primary-100': '#DBEDFF',
                'primary-50': '#FAFCFF',
            },
            fontFamily: {
                sans: ['DM Sans', 'sans-serif'],
            },
            flexGrow: {
                2: '2',
                3: '3',
                4: '4',
                5: '5',
                6: '6',
                7: '7',
                8: '8',
                9: '9',
                10: '10',
                11: '11',
                12: '12',
            },
        },
    },
};
