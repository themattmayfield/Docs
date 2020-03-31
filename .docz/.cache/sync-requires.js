const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/macmini/Tmd/Docs/.docz/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/macmini/Tmd/Docs/.docz/src/pages/index.js"))),
  "component---readme-md": hot(preferDefault(require("/Users/macmini/Tmd/Docs/README.md"))),
  "component---docs-awsnode-mdx": hot(preferDefault(require("/Users/macmini/Tmd/Docs/docs/awsnode.mdx"))),
  "component---docs-index-mdx": hot(preferDefault(require("/Users/macmini/Tmd/Docs/docs/index.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/macmini/Tmd/Docs/.docz/src/pages/404.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/macmini/Tmd/Docs/.docz/src/pages/page-2.js")))
}

