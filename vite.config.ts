import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, './src/assets'),
            '@components': path.resolve(__dirname, './src/components'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@public': path.resolve(__dirname, './public'),
            '@store': path.resolve(__dirname, './src/store')
        }
    },
    server: {
        host: '0.0.0.0',  // Ensures the server listens on all available interfaces
        port: process.env.PORT ? parseInt(process.env.PORT) : 3000,  // Use the PORT environment variable or fallback to 3000
    },
});
