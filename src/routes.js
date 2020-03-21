const { Router } = require("express");

const routes = new Router();

routes.get("/teste", (req, res) => {
  res.json({ ok: true });
});

module.exports = routes;
