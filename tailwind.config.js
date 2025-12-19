// tailwind.config.js
// tailwind.config.js
import typography from '@tailwindcss/typography'; // require ではなく import を使う

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
    typography, // ここでインポートした変数を入れる
  ],
}