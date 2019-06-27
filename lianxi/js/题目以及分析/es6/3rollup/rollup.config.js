import { rollup } from 'rollup';
import babel from 'rollup-plugin-babel';
 
export default {
  entry: 'src/es6map.js',
  plugins: [
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers'],
      externalHelpers: true,
      babelrc: false,
      presets: [['env', { modules: false }]],
    })
  ],
  dest:'_build/bundle.js'
}