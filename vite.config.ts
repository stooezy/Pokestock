/// <reference types="vitest" />
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Pages from 'vite-plugin-pages';
import AutoImport from 'unplugin-auto-import/vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    react(),
    Pages({
      dirs: 'src/pages',
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.md$/, // .md
      ],
      imports: ['react', 'react-router-dom', 'ahooks', 'recoil'],
      dts: './src/auto-imports.d.ts',
      dirs: [],
      eslintrc: {
        enabled: true,
      },
    }),
    VitePWA({ registerType: 'autoUpdate' }),
  ],

  test: {
    globals: true,
    environment: 'jsdom',
  },
});
