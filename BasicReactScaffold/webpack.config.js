const HtmlWebPackPlugin = require("html-webpack-plugin");


module.exports = env => {
  console.log("TARGET_ENV : ", env.TARGET_ENV); // true
  return {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/index.ejs",
        inject: "body",
        environment: env.TARGET_ENV,
        filename: "./index.html"
      })
    ]
  };
};
