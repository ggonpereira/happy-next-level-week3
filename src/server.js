// import packages/dependencies
const express = require("express");
const path = require("path");
const pages = require("./pages");

// initializing express
const server = express();
server.disable("x-powered-by");

server
  // use body from req
  .use(express.urlencoded({ extended: true }))
  // using the statics archives
  .use(express.static("public"))

  // configure template engine
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")

  // application routes
  .get("/", pages.index)
  .get("/orphanage", pages.orphanage)
  .get("/orphanages", pages.orphanages)
  .get("/create-orphanage", pages.createOrphanage)
  .post("/save-orphanage", pages.saveOrphanage);

// turning on the server
server.listen(5500);
