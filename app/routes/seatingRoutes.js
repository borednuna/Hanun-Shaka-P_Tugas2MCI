const router = require("express").Router();
const seatingController = require("../controllers/seatingController");

router.get("/", seatingController.getAllSeating);
router.get("/:id", seatingController.getSeatingById);
router.get("/sesi/:sesi", seatingController.getSeatingBySesi);
router.get(
  "/ketersediaan/:ketersediaan",
  seatingController.getSeatingByKetersediaan
);
router.post("/", seatingController.createSeating);
router.put("/:id", seatingController.updateSeating);
router.delete("/:id", seatingController.deleteSeating);

module.exports = router;
