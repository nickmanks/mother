import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import url from 'rollup-plugin-url';
import { terser } from 'rollup-plugin-terser';
import filesize from 'rollup-plugin-filesize';
import progress from 'rollup-plugin-progress';
import visualizer from 'rollup-plugin-visualizer';
import copy from 'rollup-plugin-copy';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.js',
            format: 'es',
            sourcemap: true,
        },
    ],
    external: [
        // package.json dependencies
        'react',
        'styled-components',
        'polished',
        'ramda',
        'react-helmet',
        '@fluentui/react',
        '@fluentui/react/lib/Icon',
        '@uifabric',
        '@uifabric/icons',
        'office-ui-fabric-react',
        'lodash.uniqueid',
    ],
    plugins: [
        external(),

        typescript({
            tsconfigDefaults: {
                compilerOptions: {
                    declaration: true,
                    jsx: 'react',
                },
            },
        }),

        url({
            include: ['**/*.woff', '**/*.woff2', '**/*.otf'],
            limit: Infinity,
        }),

        resolve(),

        terser(),

        filesize(),

        progress({ clearLine: false }),

        visualizer({
            filename: './statistics.html',
            title: 'Mother UI React',
        }),

        // When in production
        // copy({
        //     targets: [
        //         { src: 'package.json', dest: 'dist/' },
        //         { src: 'statistics.html', dest: 'dist/' },
        //     ],
        // }),
    ],
};
