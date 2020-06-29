const path = require('path');

module.exports = {
    stories: ['../src/**/*.stories.[tj]sx', '../src/**/*.stories.mdx'],
    addons: [
        '@storybook/addon-docs',
        '@storybook/addon-essentials',
        '@storybook/addon-storysource',
        '@storybook/addon-a11y',
    ],
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: require.resolve('ts-loader'),
                },
                {
                    loader: require.resolve('react-docgen-typescript-loader'),
                    options: {
                        tsconfigPath: path.resolve(
                            __dirname,
                            '../tsconfig.json',
                        ),
                    },
                },
            ],
        });

        config.module.rules.push({
            test: /\.(png|woff|woff2|svg)$/,
            use: [
                {
                    loader: 'file-loader',
                    query: {
                        name: '[name].[ext]',
                    },
                },
            ],
            include: path.resolve(__dirname, '../'),
        });

        config.resolve.extensions.push('.ts', '.tsx');

        return config;
    },
};
