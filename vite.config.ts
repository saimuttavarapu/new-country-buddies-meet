

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // NOT 'react-swc'

export default defineConfig({
  base: '/new-country-buddies-meet/',
  plugins: [react()],
});
