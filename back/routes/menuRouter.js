const { Router } = require("express");
const { getMenu } = require("../controllers/menusController");

const menuRouter = Router();

menuRouter.get("/v1/menus", getMenu);

module.exports = menuRouter;
