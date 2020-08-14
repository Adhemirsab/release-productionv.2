
const path = require('path') /*este es un modulo de node y se encarga de la gestion de rutas*/
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
/*Para exportar un modulo, se debe hacer de la forma de commonJS*/
module.exports = {
    entry: {
        home: path.resolve(__dirname, './src/JS/index.js'), /*El archivo que queremos transpilar */
        
    },
    mode: 'production', /* modo de ejecución */
    output:{ /*Configuraciones para el archivo final que generará webpack */   
        path: path.resolve(__dirname, 'dist'), /* La ruta en donde quedará el archivo final */   
        filename: 'JS/[name].js' /*El nombre con el que se creará el archivo final */
    },
    devServer: {
        hot:true,
        open:true,
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use : [
                    'babel-loader'
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.(sc|sa|c)ss$/,
                use : [
                    {
                        loader: MiniCSSExtractPlugin.loader
                    },
                    // 'style-loader', //inyecta css al navegador
                    'css-loader', //inyecta css a javascript
                    'sass-loader'
                ],
                exclude: /node_modules/,
            },

            {
                test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
                use : [
                    {                    
                        loader:'url-loader',
                        options: {
                            limit: 9000,
                            name: '[name].[ext]',
                            outputPath: 'icons/assets/',
                            useRelativePath: true
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                              progressive: true,
                              quality: 65
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                              enabled: true,
                            },
                            pngquant: {
                              quality: [0.65, 0.90],
                              speed: 4
                            },
                            gifsicle: {
                              interlaced: false,
                            },
                            // the webp option will enable WEBP
                            // webp: {
                            //   quality: 75
                            // }
                          },
                         
                    }
                    
                ],       
            },


        ]
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            // title: 'Plugins',
            template: './src/index.html',
            minify : {
                collapseWhitespace : true , 
                removeComments : true , 
                removeRedundantAttributes : true , 
                removeScriptTypeAttributes : true , 
                removeStyleLinkTypeAttributes : true , 
                useShortDoctype : true 
        }, 
        
        }),

        new MiniCSSExtractPlugin({
            filename:'css/[name].css',
            
        }),
        
    ]
    
}
