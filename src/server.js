// import packages/dependencies
const express = require("express");
const path = require("path");
const pages = require("./pages.js");

// initializing express
const server = express();

server
  // using the statics archives
  .use(express.static("public"))

  // configure template engine
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")

  // application routes
  .get("/", pages.index)
  .get("/orphanage", pages.orphanage)
  .get("/orphanages", pages.orphanages)
  .get("/create-orphanage", pages.createOrphanage);

// turning on the server
server.listen(5500);
