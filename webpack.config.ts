import path from 'path'
import { Configuration } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'

const isProduction = process.argv.includes('-p') || process.env.NODE_ENV === 'production'

const SOURCE_DIR = path.join(__dirname, 'src')
const DIST_DIR = path.join(__dirname, 'dist')
const STATIC_DIR = path.join(__dirname, 'static')

const config: Configuration = {
  devtool: 'source-map',
  entry: {
    app: path.join(SOURCE_DIR, './index.tsx')
  },
  mode: isProduction ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'awesome-typescript-loader',
          options: {
            useBabel: true,
            babelOptions: {
              babelrc: false,
              plugins: ['react-hot-loader/babel', 'babel-plugin-styled-components']
            },
            babelCore: '@babel/core'
          }
        },
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  output: {
    filename: 'bundle.[hash].js',
    path: DIST_DIR
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.join(SOURCE_DIR, 'template.html') }),
    new CopyPlugin([{ from: STATIC_DIR, to: DIST_DIR }])
  ],
  devServer: {
    host: '0.0.0.0',
    hot: true
  }
}

export default config
