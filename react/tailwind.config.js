/** @type {import('tailwindcss').Config} */
export const content = [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}', // Ajusta esta ruta si es necesario
];
export const theme = {
  extend: {},
};
export const plugins = [require('daisyui')];
