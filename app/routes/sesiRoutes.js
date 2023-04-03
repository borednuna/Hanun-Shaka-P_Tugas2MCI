const router = require("express").Router();
const sesiController = require("../controllers/sesiController");

router.get("/", sesiController.getAllSesi);
router.get("/:id", sesiController.getSesiById);
router.get("/pemateri/:pemateri", sesiController.getSesiByPemateri);
router.get("/tanggal/:tanggal", sesiController.getSesiByTanggal);
router.get("/waktu/:waktu", sesiController.getSesiByWaktu);
router.post("/", sesiController.createSesi);
router.put("/:id", sesiController.updateSesi);
router.delete("/:id", sesiController.deleteSesi);

module.exports = router;
