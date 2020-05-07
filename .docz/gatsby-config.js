const { mergeWith } = require('docz-utils')
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
    title: 'Vida Documentation',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {
          styles: {
            body: {
              fontFamily:
                'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
            },
          },
        },
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Users/phuocdo/Workspace/redwoodjs/vida-docs/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Vida Documentation',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/phuocdo/Workspace/redwoodjs/vida-docs',
          templates:
            '/Users/phuocdo/Workspace/redwoodjs/vida-docs/node_modules/docz-core/dist/templates',
          docz: '/Users/phuocdo/Workspace/redwoodjs/vida-docs/.docz',
          cache: '/Users/phuocdo/Workspace/redwoodjs/vida-docs/.docz/.cache',
          app: '/Users/phuocdo/Workspace/redwoodjs/vida-docs/.docz/app',
          appPackageJson:
            '/Users/phuocdo/Workspace/redwoodjs/vida-docs/package.json',
          appTsConfig:
            '/Users/phuocdo/Workspace/redwoodjs/vida-docs/tsconfig.json',
          gatsbyConfig:
            '/Users/phuocdo/Workspace/redwoodjs/vida-docs/gatsby-config.js',
          gatsbyBrowser:
            '/Users/phuocdo/Workspace/redwoodjs/vida-docs/gatsby-browser.js',
          gatsbyNode:
            '/Users/phuocdo/Workspace/redwoodjs/vida-docs/gatsby-node.js',
          gatsbySSR:
            '/Users/phuocdo/Workspace/redwoodjs/vida-docs/gatsby-ssr.js',
          importsJs:
            '/Users/phuocdo/Workspace/redwoodjs/vida-docs/.docz/app/imports.js',
          rootJs:
            '/Users/phuocdo/Workspace/redwoodjs/vida-docs/.docz/app/root.jsx',
          indexJs:
            '/Users/phuocdo/Workspace/redwoodjs/vida-docs/.docz/app/index.jsx',
          indexHtml:
            '/Users/phuocdo/Workspace/redwoodjs/vida-docs/.docz/app/index.html',
          db: '/Users/phuocdo/Workspace/redwoodjs/vida-docs/.docz/app/db.json',
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
