import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'ChaiChocoTailwind',
      formats: ['es', 'umd'],
      fileName: (format) =>
        format === 'es'
          ? 'chai-choco-tailwind.esm.js'
          : 'chai-choco-tailwind.umd.js',
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
})
