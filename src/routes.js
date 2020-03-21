const { Router } = require("express");

const routes = new Router();

const authMiddleware = require("./app/middlewares/auth");
const userMiddleware = require("./app/middlewares/user");

//set user in the request to simulate
routes.use(userMiddleware);

//check user
routes.use(authMiddleware);

routes.get("/teste", (req, res) => {
  console.log(req.userId);
  res.json({ ok: true });
});

module.exports = routes;
