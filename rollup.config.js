import resolve from '@rollup/plugin-node-resolve';
import vue from 'rollup-plugin-vue'
import babel from 'rollup-plugin-babel';
import filesize from 'rollup-plugin-filesize';
import del from 'rollup-plugin-delete';
import minify from 'rollup-plugin-babel-minify';

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/v-bundle.cjs.js',
        format: 'cjs'
    },
    plugins: [
        del({ targets: 'dist/*' }),
        filesize(),
        resolve(),
        babel({
            exclude: 'node_modules/**'
        }),
        vue(),
        minify({
            removeConsole: true,
            removeDebugger: true
        })
    ]
};