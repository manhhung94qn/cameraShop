const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const router = require('./routers.js');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

const passport = require('passport');

app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());

require('./configs/db');
// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000;
app.use(function (req, res, next) {
  res.setHeader('X-Powered-By', 'HungKing.io')
  next()
});

app.use(passport.initialize());

require('./configs/passport');

router(app);


async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  //const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port)
  consola.ready({
    message: `Server listening on ${port}`,
    badge: true
  })
}
start()
