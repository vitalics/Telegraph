import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./src/index.ts'],
  dts: true,
  clean: true,
  outDir: 'dist',
  format: ['cjs', 'esm'],
  splitting: false,
  cjsInterop: true,
  target: ['node18'],
  external: ['react'],
  shims: true,
  tsconfig: './tsconfig.json',
  outExtension({ format }) {
    return {
      js: format === 'cjs' ? '.cjs' : format === 'esm' ? `.mjs` : '.js',
    }
  },
})