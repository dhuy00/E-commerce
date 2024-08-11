const categoryControllers = require("../../controllers/dashboard/categoryControllers");
const { authMiddleware } = require("../../middleware/authMiddleware");
const router = require("express").Router();

router.post("/category-add", authMiddleware, categoryControllers.add_category);
router.get("/category-get", authMiddleware, categoryControllers.get_category);

module.exports = router;
