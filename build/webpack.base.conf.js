const path=require('path');
module.exports = {
    entry: "./src/index.tsx",
    output: {
      filename: "bundle.js",
      path:path.resolve(__dirname, "../dist"),
    },
  
    devtool: "source-map",
  
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
    },
  
    module: {
      rules: [
        { test: /\.tsx?$/, loader: "ts-loader" },
        { test: /\.css$/, loader: 'style-loader!css-loader' },
        {test: /\.scss$/,loader: 'style!css!sass'},
        {test: /\.(png|jpeg|gif|jpg)$/,loader: 'url?limit=25000'},
        { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
      ]
    },
  
    plugins:[
  ]
  };