const router = require('express').Router();
const bookingController = require('../controllers/bookingController');

router.get('/', bookingController.getAllBooking);
router.get('/:id', bookingController.getBookingById);
router.get('/user/:user', bookingController.getBookingByUser);
router.get('/tanggal/:tanggal', bookingController.getBookingByTanggal);
router.post('/', bookingController.createBooking);
router.put('/:id', bookingController.updateBooking);
router.delete('/:id', bookingController.deleteBooking);

module.exports = router;
