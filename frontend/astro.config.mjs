import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    server: {
        port: 3000,
        host: '0.0.0.0',
    },
    integrations: [react(), tailwind()]
});