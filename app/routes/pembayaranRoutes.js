const router = require("express").Router();
const pembayaranController = require("../controllers/pembayaranController");

router.get("/", pembayaranController.getAllPembayaran);
router.get("/:id", pembayaranController.getPembayaranById);
router.get("/tanggal/:tanggal", pembayaranController.getPembayaranByTanggal);
router.post("/", pembayaranController.createPembayaran);
router.put("/:id", pembayaranController.updatePembayaran);
router.delete("/:id", pembayaranController.deletePembayaran);

module.exports = router;
