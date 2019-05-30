const path = require('path')

const join = path.join
const logger = console.log

const root = join(__dirname, '..', 'server')
const port = process.env.APP_PORT || 8082

module.exports = {
  appRootDir: join(__dirname, '..'),
  appName: 'rosebud',
  // `@app-proto/recipes` path config
  path: {
    'ctx-registers': join(root, 'ctx-registers'),
    middlewares: join(root, 'middlewares'),
    controllers: join(root, 'controllers'),
    templates: join(root, 'templates'),
    datasources: join(root, 'datasources'),
    bundles: {
      path: join(root, '..', '_bundles'),
      whitelist: ['wl.js'],
    },
  },
  webpack: {
    'web-assets-dir': 'static',
    // 支持选择某些页面构建，实际开发中不需要整站构建
    'entries-sub': {},
    'common-chunk': {},
  },
  services: {
    cdn: ''
  },
  browserslist: 'last 1 Chrome versions',
  port,
  mock: true,
}

