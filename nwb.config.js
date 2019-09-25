const fs = require('fs');
const path = require('path');

module.exports = ({ command }) => {
    const devRun = command.startsWith('serve');
    const config = {
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
        devServer: {
            inline: true,
        },
        webpack: {
            config(wpConfig) {
                if (process.env.DEBUG) {
                    fs.writeFile(
                        'debug.log.json',
                        JSON.stringify(wpConfig, null, 4),
                        () => {}
                    );
                }

                wpConfig.resolve.extensions = wpConfig.resolve.extensions || [
                    '.js',
                    '.jsx',
                ];

                wpConfig.module.rules.push({
                    enforce: 'pre',
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'eslint-loader',
                    options: {
                        fix: true,
                    },
                });

                wpConfig.module.rules.push({
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'stage-2'],
                    },
                    test: /\.jsx?$/,
                });

                wpConfig.output.path = path.resolve(__dirname, './docs');

                if (devRun) {
                    wpConfig.entry = wpConfig.entry || [];
                    wpConfig.entry.unshift('react-hot-loader/patch');
                }

                return wpConfig;
            },
        },
    };

    if (devRun) {
        config.babel = {
            ...(config.babel || {}),
            plugins: 'react-hot-loader/babel',
        };
    }

    return config;
};
