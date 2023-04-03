const router = require("express").Router();
const detailSesiController = require("../controllers/detailSesiController");

router.get("/", detailSesiController.getAllDetailSesi);
router.get("/:id", detailSesiController.getDetailSesiById);
router.post("/", detailSesiController.createDetailSesi);
router.put("/:id", detailSesiController.updateDetailSesi);
router.delete("/:id", detailSesiController.deleteDetailSesi);

module.exports = router;
