const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/macmini/Tmd/Docs/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---readme-md": hot(preferDefault(require("/Users/macmini/Tmd/Docs/README.md"))),
  "component---components-alert-mdx": hot(preferDefault(require("/Users/macmini/Tmd/Docs/components/Alert.mdx"))),
  "component---components-button-mdx": hot(preferDefault(require("/Users/macmini/Tmd/Docs/components/Button.mdx"))),
  "component---docs-index-mdx": hot(preferDefault(require("/Users/macmini/Tmd/Docs/docs/index.mdx"))),
  "component---blog-hello-world-index-md": hot(preferDefault(require("/Users/macmini/Tmd/Docs/blog/hello-world/index.md"))),
  "component---blog-hi-folks-index-md": hot(preferDefault(require("/Users/macmini/Tmd/Docs/blog/hi-folks/index.md"))),
  "component---blog-my-second-post-index-md": hot(preferDefault(require("/Users/macmini/Tmd/Docs/blog/my-second-post/index.md")))
}

