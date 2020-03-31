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
    description:
      'A simple starter to get up and developing quickly with Gatsby',
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
        root: '/Users/macmini/gatsby-starter-default/.docz',
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
        description:
          'A simple starter to get up and developing quickly with Gatsby',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/macmini/gatsby-starter-default',
          templates:
            '/Users/macmini/gatsby-starter-default/node_modules/docz-core/dist/templates',
          docz: '/Users/macmini/gatsby-starter-default/.docz',
          cache: '/Users/macmini/gatsby-starter-default/.docz/.cache',
          app: '/Users/macmini/gatsby-starter-default/.docz/app',
          appPackageJson: '/Users/macmini/gatsby-starter-default/package.json',
          gatsbyConfig:
            '/Users/macmini/gatsby-starter-default/gatsby-config.js',
          gatsbyBrowser:
            '/Users/macmini/gatsby-starter-default/gatsby-browser.js',
          gatsbyNode: '/Users/macmini/gatsby-starter-default/gatsby-node.js',
          gatsbySSR: '/Users/macmini/gatsby-starter-default/gatsby-ssr.js',
          importsJs:
            '/Users/macmini/gatsby-starter-default/.docz/app/imports.js',
          rootJs: '/Users/macmini/gatsby-starter-default/.docz/app/root.jsx',
          indexJs: '/Users/macmini/gatsby-starter-default/.docz/app/index.jsx',
          indexHtml:
            '/Users/macmini/gatsby-starter-default/.docz/app/index.html',
          db: '/Users/macmini/gatsby-starter-default/.docz/app/db.json',
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
