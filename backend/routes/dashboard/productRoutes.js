const productControllers = require("../../controllers/dashboard/productControllers");
const { authMiddleware } = require("../../middleware/authMiddleware");
const router = require("express").Router();

router.post("/product-add", authMiddleware, productControllers.add_product);

module.exports = router;
