import typescript from "@rollup/plugin-typescript";

export default [{
  input: ['./src/base58.ts'],
  output: [{
    dir: './dist',
    format: 'es'
  }],
  external: ['@vandeurenglenn/base-x'],
  
  plugins: [ typescript() ]
}]
