import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'shared-nestjs-utils',
      fileName: 'shared-nestjs-utils',
    },
    target: 'esnext',
  },
  plugins: [dts({ rollupTypes: true })],
});