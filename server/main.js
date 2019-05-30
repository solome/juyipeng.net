const Koa = require('koa')
const http = require('http')
const chalk = require('chalk')
const config = require('@app-proto/ify/lib/config')
const recipes = require('@app-proto/recipes').default

const logger = console.log
const env = process.env.NODE_ENV || 'dev'
const port = process.env.PORT || config.port || 8080
const url = '127.0.0.1:' + port


const app = new Koa()
recipes(app, config)

const success =
`------------------------------------------------------------------------------------------
 ${chalk.red('(◔⊖◔)つ')}: app-proto server listening on ${chalk.magenta.bold(port)}, visit ${chalk.green.underline.bold(url)} to check awesome!
---------- ☝( ◠‿◠ )☝ ---------------------------------------------------------------------`


http.createServer(app.callback()).listen(port, () => setTimeout(() => console.log(success), 0))

