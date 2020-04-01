const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/macmini/Tmd/Docs/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---readme-md": hot(preferDefault(require("/Users/macmini/Tmd/Docs/README.md"))),
  "component---docs-awsnode-mdx": hot(preferDefault(require("/Users/macmini/Tmd/Docs/docs/awsnode.mdx"))),
  "component---docs-index-mdx": hot(preferDefault(require("/Users/macmini/Tmd/Docs/docs/index.mdx"))),
  "component---docs-filemakerwebdirectrecord-mdx": hot(preferDefault(require("/Users/macmini/Tmd/Docs/docs/filemakerwebdirectrecord.mdx")))
}

