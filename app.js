const express = require("express");
const router = require("./routes");
const cors = require("cors");

const createApp = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(router);

  return app;
};

module.exports = { createApp };
