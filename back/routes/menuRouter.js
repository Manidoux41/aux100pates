const { Router } = require("express");
const { getMenu } = require("../controllers/menusController");

const menuRouter = Router();

menuRouter.get("/api/menus", getMenu);

module.exports = menuRouter;
