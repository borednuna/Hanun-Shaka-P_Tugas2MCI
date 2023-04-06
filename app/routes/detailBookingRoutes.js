const router = require("express").Router();
const detailBookingController = require("../controllers/detailBookingController");

router.get("/", detailBookingController.getAllDetailBooking);
router.get("/:id", detailBookingController.getDetailBookingById);
router.get("/booking/:booking", detailBookingController.getDetailBookingByBooking);
router.get("/sesi/:sesi", detailBookingController.getDetailBookingBySesi);
router.post("/", detailBookingController.createDetailBooking);
router.put("/:id", detailBookingController.updateDetailBooking);
router.delete("/:id", detailBookingController.deleteDetailBooking);

module.exports = router;
