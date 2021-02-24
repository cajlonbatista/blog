const express = require("express");
const routes = express.Router();
const ArticleController  = require('./controllers/ArticleController');

routes.get("/articles", ArticleController.index);
routes.post("/articles", ArticleController.store);
routes.get("/articles/:id", ArticleController.show);
routes.put("/articles/:id", ArticleController.update);
routes.delete("/articles/:id", ArticleController.destoy);
routes.get("/search/:tags", ArticleController.search);

module.exports = routes;