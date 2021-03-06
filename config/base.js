const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const baseConf = (_path) => {
    // NEW pages should be added here i.g. if you need to create
    // contacts page you need add folder to src,
    // and add path and name to entry array
    const VENDORS_NAME = 'vendors';
    const entry = {
        index: ['babel-polyfill', './src/index/index.js'],
        'lesson-7': ['./src/lesson-7/lesson-7.js'],
        'homework-7': ['./src/homework-7/homework-7.js'],
        'lesson-8': ['./src/lesson-8/lesson-8.js'],
        'homework-6': ['./src/homework-6/homework-6.js'],
        'homework-8': ['./src/homework-8/homework-8.js'],
        'lesson-9': ['./src/lesson-9/lesson-9.js'],
        'lesson-10': ['./src/lesson-10/lesson-10.js'],
        'lesson-11': ['./src/lesson-11/lesson-11.js'],
        'homework-11': ['./src/homework-11/homework-11.js'],
        'lesson-12': ['./src/lesson-12/lesson-12.js'],
        'lesson-12a': ['./src/lesson-12a/lesson-12a.js'],
        'homework-12a': ['./src/homework-12a/homework-12a.js'],
        'homework-12b': ['./src/homework-12b/homework-12b.js'],
        'lesson-13': ['./src/lesson-13/lesson-13.js'],
        'homework-13': ['./src/homework-13/homework-13.js'],
        'lesson-14': ['./src/lesson-14/lesson-14.js'],
        'homework-14': ['./src/homework-14/homework-14.js'],
        'homework-14a': ['./src/homework-14a/homework-14a.js'],
        'lesson-15': ['./src/lesson-15/lesson-15.js'],
        'homework-15': ['./src/homework-15/homework-15.js'],
        'homework-15b': ['./src/homework-15b/homework-15b.js'],
        'lesson-17': ['./src/lesson-17/lesson-17.js'],
        'london': ['./src/london/london.js'],
        'homework-111': ['./src/homework-111/homework-111.js'],
        'homework-112': ['./src/homework-112/homework-112.js'],
        'svoboda-slova-styles': ['./src/svoboda-slova-styles/svoboda-slova-styles.js'],
        'svoboda-slova-header': ['./src/svoboda-slova-header/svoboda-slova-header.js'],
        's-s-menu-temp': ['./src/s-s-menu-temp/s-s-menu-temp.js'],
        'svoboda-slova-search': ['./src/svoboda-slova-search/svoboda-slova-search.js'],



    };

    const plugins = Object.keys(entry).reduce((acc, name) => {
        acc.push(new HtmlWebpackPlugin({
            chunksSortMode: 'manual',
            title: `${name}`,
            template: `./src/${name}/${name}.html`,
            chunks: [VENDORS_NAME, name],
            filename: `./${name}.html`,
        }));
        acc.push(new ExtractTextPlugin({
            filename: `[name].css`,
            allChunks: false
        }));

        return acc;
    }, []);

    plugins.concat([
        new webpack.optimize.CommonsChunkPlugin({
            name: VENDORS_NAME,
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            VERSION: JSON.stringify('5fa3b9'),
            BROWSER_SUPPORTS_HTML5: true,
            'typeof window': JSON.stringify('object')
        })
    ]);

    entry.vendors = `./src/common/scripts/${VENDORS_NAME}.js`;

    return {
        entry,
        output: {
            filename: '[name].js',
        },
        module: {
            rules: [{
                    test: /\.html$/,
                    use: [{
                        loader: 'html-loader'
                    }]
                },
                {
                    test: /\.js/,
                    exclude: /(node_modules)/,
                    use: [{
                        loader: 'babel-loader',
                        options: {
                            presets: ['env']
                        }
                    }]
                },
                {
                    test: /\.scss/,
                    loader: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader', 'autoprefixer-loader?browsers=last 5 version', 'sass-loader']
                    })
                },
                {

                    /**
                     * ASSET LOADER
                     * Reference: https://github.com/webpack/file-loader
                     * Copy png, jpg, jpeg, gif, svg, woff, woff2, ttf, eot files to output
                     * Rename the file using the asset hash
                     * Pass along the updated reference to your code
                     * You can add here any file extension you want to get copied to your output
                     */
                    test: /\.(png|jpg|jpeg|gif|svg)$/,
                    loader: 'file-loader?publicPath=./&name=assets/images/[name].[ext]'
                },
                {
                    test: /\.(eot|ttf|woff|woff2)$/,
                    loader: 'file-loader?publicPath=./&name=assets/fonts/[name].[ext]'
                }
            ]
        },
        plugins
    };
};

module.exports = baseConf;