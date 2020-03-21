const { Router } = require("express");

const routes = new Router();

const authMiddleware = require("./app/middlewares/auth");

routes.use(authMiddleware);

routes.get("/teste", (req, res) => {
  res.json({ ok: true });
});

module.exports = routes;
