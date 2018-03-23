// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": require("gatsby-module-loader?name=component---src-pages-404-js!/var/www/html/ResumePage/src/pages/404.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/var/www/html/ResumePage/src/pages/index.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/var/www/html/ResumePage/.cache/json/layout-index.json"),
  "404.json": require("gatsby-module-loader?name=path---404!/var/www/html/ResumePage/.cache/json/404.json"),
  "layout-index.json": require("gatsby-module-loader?name=path---!/var/www/html/ResumePage/.cache/json/layout-index.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/var/www/html/ResumePage/.cache/json/index.json"),
  "layout-index.json": require("gatsby-module-loader?name=path---!/var/www/html/ResumePage/.cache/json/layout-index.json"),
  "404-html.json": require("gatsby-module-loader?name=path---404-html!/var/www/html/ResumePage/.cache/json/404-html.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/var/www/html/ResumePage/.cache/layouts/index.js")
}