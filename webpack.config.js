const path = require('path');

module.exports = {
   devtool: 'inline-source-map',
   entry: './src/spec/index.ts',
   module: {
      rules: [
         {
            test: /\.ts?$/,
            use: 'ts-loader',
            exclude: /node_modules/
         }
      ]
   },
   resolve: {
      extensions: ['.ts', '.js']
   },
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
   }
};
