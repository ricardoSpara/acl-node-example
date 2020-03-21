const { Router } = require("express");
const acl = require("express-acl");
const routes = new Router();

const authMiddleware = require("./app/middlewares/auth");
const userMiddleware = require("./app/middlewares/user");

acl.config({
  filename: "acl.json",
  baseUrl: "/",
  path: "./src/config",
  decodedObjectName: "user"
});

//set user in the request to simulate
routes.use(userMiddleware);

//check token
routes.use(authMiddleware);

//set acl
routes.use(acl.authorize);

routes.get("/", (req, res) => {
  res.json({ route: "/", method: "GET" });
});

//allow
routes.get("/users", (req, res) => {
  res.json({ route: "/user", method: "GET" });
});

//deny
routes.get("/admin", (req, res) => {
  res.json({ route: "/test", method: "GET" });
});

module.exports = routes;
