import {defineConfig} from "vite";
import react from "@vitejs/plugin-react-swc";
import mkcert from'vite-plugin-mkcert'


export default defineConfig({
    server: {
        base: 'https://admin.chgk.dev/',
        https: true,
        host: 'admin.chgk.dev',
        port: 3001,
    },
    plugins: [react(), mkcert()],
});
