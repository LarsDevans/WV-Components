import { defineConfig } from 'vite';
import { peerDependencies } from './package.json';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({ exclude: ['**/*.stories.ts', '**/*.test.ts'] })
  ],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'wv',
      fileName: (format) => `wv.${format}.js`,
      formats: ['es', 'cjs', 'umd'],
    },
    rollupOptions: {
      external: Object.keys(peerDependencies),
      output: { globals: { react: 'React', 'react-dom': 'ReactDOM' } }
    },
  },
})
