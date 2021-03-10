const express = require('express');
const cors = require('cors');

const routes = require('./routes');

require('./database');

class App {
  constructor() {
    this.app = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors()) ;
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use(routes);
  }
}

module.exports = new App().app;
