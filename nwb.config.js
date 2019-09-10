module.exports = {
    type: 'react-component',
    npm: {
        esModules: true,
        umd: {
            global: 'Theremin',
            externals: {
                react: 'React',
            },
        },
    },
    webpack: {
        config(config) {
            config.resolve.extensions = config.resolve.extensions || [
                '.js',
                '.jsx',
            ];

            config.module.rules.push({
                enforce: 'pre',
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    fix: true,
                },
            });

            config.module.rules.push({
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['react'],
                },
                test: /\.jsx?$/,
            });

            return config;
        },
    },
    devServer: {
        hotOnly: true,
        inline: true,
        hot: true,
    },
};
