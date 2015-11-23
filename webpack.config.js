var webpack = require("webpack");
var path = require('path');

module.exports = {
    entry: "./js/app/app.js",
    output: {
        filename: "./public/js/build.js"
    },
    watch: true
};