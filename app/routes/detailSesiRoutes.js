const router = require("express").Router();
const detailSesiController = require("../controllers/detailSesiController");

router.get("/", detailSesiController.getAllDetailSesi);
router.get("/:id", detailSesiController.getDetailSesiById);
router.get("/booking/:booking", detailSesiController.getDetailSesiByBooking);
router.get("/sesi/:sesi", detailSesiController.getDetailSesiBySesi);
router.post("/", detailSesiController.createDetailSesi);
router.put("/:id", detailSesiController.updateDetailSesi);
router.delete("/:id", detailSesiController.deleteDetailSesi);

module.exports = router;
