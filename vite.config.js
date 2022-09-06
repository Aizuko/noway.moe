import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  clearScreen: false,
  server: {
    host: 'localhost',
    port: 8000,
    https: false
  },
};

export default config;
