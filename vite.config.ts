```ts
import { defineConfig } from 'vite'


export default defineConfig({
build: {
outDir: 'dist',
emptyOutDir: true,
rollupOptions: {
input: {
background: 'src/background.ts',
content: 'src/content.ts',
options: 'options/index.html'
},
output: {
entryFileNames: (chunk) => {
// Keep MV3 filenames predictable
if (chunk.name === 'background') return 'src/background.js'
if (chunk.name === 'content') return 'src/content.js'
return 'assets/[name]-[hash].js'
},
assetFileNames: (asset) => {
if (String(asset.name).endsWith('.css')) return 'assets/[name]-[hash][extname]'
return 'assets/[name]-[hash][extname]'
}
}
}
}
})
```
