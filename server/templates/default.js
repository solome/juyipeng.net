const Template = require('@app-proto/recipes/template').default

class DefaultTpl extends Template {
  constructor(serveData) {
    super(serveData)
  }

  async toHtml() {
    const serveData = await JSON.stringify(this.serveData)
    const page =new this.serveBundle
    return `
      <!DOCTYPE html>
      <html>
        <head></head>
        <script>window.serveData=${serveData}</script>
        <body>
          ${page.render()}
        </body>
      </html>
    `
  }
}

exports.default = DefaultTpl

