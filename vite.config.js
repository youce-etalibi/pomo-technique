import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/pomo-technique/', // Adjust this based on your repository name
  plugins: [react()],
});
