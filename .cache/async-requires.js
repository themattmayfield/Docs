// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": () => import("./../node_modules/gatsby-plugin-offline/app-shell.js" /* webpackChunkName: "component---node-modules-gatsby-plugin-offline-app-shell-js" */),
  "component---readme-md": () => import("./../README.md" /* webpackChunkName: "component---readme-md" */),
  "component---components-alert-mdx": () => import("./../components/Alert.mdx" /* webpackChunkName: "component---components-alert-mdx" */),
  "component---components-button-mdx": () => import("./../components/Button.mdx" /* webpackChunkName: "component---components-button-mdx" */),
  "component---docs-index-mdx": () => import("./../docs/index.mdx" /* webpackChunkName: "component---docs-index-mdx" */),
  "component---blog-hello-world-index-md": () => import("./../blog/hello-world/index.md" /* webpackChunkName: "component---blog-hello-world-index-md" */),
  "component---blog-hi-folks-index-md": () => import("./../blog/hi-folks/index.md" /* webpackChunkName: "component---blog-hi-folks-index-md" */),
  "component---blog-my-second-post-index-md": () => import("./../blog/my-second-post/index.md" /* webpackChunkName: "component---blog-my-second-post-index-md" */)
}

