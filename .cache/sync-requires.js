// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/var/www/html/ResumePage/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-pages-404-js": preferDefault(require("/var/www/html/ResumePage/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/var/www/html/ResumePage/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/var/www/html/ResumePage/.cache/json/layout-index.json"),
  "404.json": require("/var/www/html/ResumePage/.cache/json/404.json"),
  "layout-index.json": require("/var/www/html/ResumePage/.cache/json/layout-index.json"),
  "index.json": require("/var/www/html/ResumePage/.cache/json/index.json"),
  "layout-index.json": require("/var/www/html/ResumePage/.cache/json/layout-index.json"),
  "404-html.json": require("/var/www/html/ResumePage/.cache/json/404-html.json")
}