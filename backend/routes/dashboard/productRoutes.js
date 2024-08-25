const productControllers = require("../../controllers/dashboard/productControllers");
const { authMiddleware } = require("../../middleware/authMiddleware");
const router = require("express").Router();

router.post("/product-add", authMiddleware, productControllers.add_product);
router.get("/products-get", authMiddleware, productControllers.get_products);
router.get(
  "/product-get/:productId",
  authMiddleware,
  productControllers.get_product
);
router.post(
  "/product-update",
  authMiddleware,
  productControllers.update_product
);
router.post(
  "/product-image-update",
  authMiddleware,
  productControllers.update_product_image
);
module.exports = router;
