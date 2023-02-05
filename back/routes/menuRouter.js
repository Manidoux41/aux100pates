const { Router } = require("express");
const { getMenu } = require("../controllers/menusController");

const menuRouter = Router();

menuRouter.get("/v2/menus", getMenu);

module.exports = menuRouter;
