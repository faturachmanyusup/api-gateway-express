const express = require('express')

const routes = require("./config/routes");

const setupProxies= require("./config/proxy");

const app = express()
const PORT = 3000;

setupProxies(app, routes);

app.listen(PORT, () => {
  console.log("API_GATEWAY running on port:", PORT);
})