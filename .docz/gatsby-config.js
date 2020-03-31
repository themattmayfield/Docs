const { mergeWith } = require('lodash/fp')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Matt Mayfield',
    description: 'Documentation site for all projects',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: '/Users/macmini/Tmd/Docs/.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Matt Mayfield',
        description: 'Documentation site for all projects',
        host: 'localhost',
        port: 3001,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/macmini/Tmd/Docs',
          templates:
            '/Users/macmini/Tmd/Docs/node_modules/docz-core/dist/templates',
          docz: '/Users/macmini/Tmd/Docs/.docz',
          cache: '/Users/macmini/Tmd/Docs/.docz/.cache',
          app: '/Users/macmini/Tmd/Docs/.docz/app',
          appPackageJson: '/Users/macmini/Tmd/Docs/package.json',
          gatsbyConfig: '/Users/macmini/Tmd/Docs/gatsby-config.js',
          gatsbyBrowser: '/Users/macmini/Tmd/Docs/gatsby-browser.js',
          gatsbyNode: '/Users/macmini/Tmd/Docs/gatsby-node.js',
          gatsbySSR: '/Users/macmini/Tmd/Docs/gatsby-ssr.js',
          importsJs: '/Users/macmini/Tmd/Docs/.docz/app/imports.js',
          rootJs: '/Users/macmini/Tmd/Docs/.docz/app/root.jsx',
          indexJs: '/Users/macmini/Tmd/Docs/.docz/app/index.jsx',
          indexHtml: '/Users/macmini/Tmd/Docs/.docz/app/index.html',
          db: '/Users/macmini/Tmd/Docs/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
