import {defineConfig} from "vite";
import react from "@vitejs/plugin-react-swc";
import mkcert from'vite-plugin-mkcert'

export default defineConfig({
    server: {
        base: 'https://chgk.dev/',
        https: true,
        host: 'chgk.dev',
        port: 443,
        proxy: {
            '/main': {
                target: 'https://chgk.dev',
            },
            '/admin': {
                target: 'https://admin.chgk.dev:3001',
            }
        }
    },
    plugins: [react(), mkcert()],
});
