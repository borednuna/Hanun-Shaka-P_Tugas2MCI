const BookingService = require("../services/bookingService");

const getAllBooking = (req, res) => {
  BookingService.getAllBooking()
    .then((Bookings) => {
      res.status(200).json({
        status: "success",
        message: "Booking retrieved successfully",
        data: Bookings,
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: "error",
        message: error.message,
        data: error,
      });
    });
};

const getBookingById = (req, res) => {
  BookingService.getBookingById(req.params.id)
    .then((Booking) => {
      res.status(200).json({
        status: "success",
        message: "Booking retrieved successfully",
        data: Booking,
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: "error",
        message: error.message,
        data: error,
      });
    });
};

const getBookingByUser = (req, res) => {
  BookingService.getBookingById(req.params.user)
    .then((Booking) => {
      res.status(200).json({
        status: "success",
        message: "Booking retrieved successfully",
        data: Booking,
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: "error",
        message: error.message,
        data: error,
      });
    });
};

const getBookingByTanggal = (req, res) => {
  BookingService.getBookingByTanggal(req.params.tanggal)
    .then((Bookings) => {
      res.status(200).json({
        status: "success",
        message: "Booking retrieved successfully",
        data: Bookings,
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: "error",
        message: error.message,
        data: error,
      });
    });
};

const createBooking = (req, res) => {
  BookingService.createBooking(req.body)
    .then((Booking) => {
      res.status(200).json({
        status: "success",
        message: "Booking created successfully",
        data: Booking,
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: "error",
        message: error.message,
        data: error,
      });
    });
};

const updateBooking = (req, res) => {
  BookingService.updateBooking(req.params.id, req.body)
    .then((Booking) => {
      res.status(200).json({
        status: "success",
        message: "Booking updated successfully",
        data: Booking,
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: "error",
        message: error.message,
        data: error,
      });
    });
};

const deleteBooking = (req, res) => {
  BookingService.deleteBooking(req.params.id)
    .then((Booking) => {
      res.status(200).json({
        status: "success",
        message: "Booking deleted successfully",
        data: Booking,
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: "error",
        message: error.message,
        data: error,
      });
    });
};

module.exports = {
  getAllBooking,
  getBookingById,
  getBookingByUser,
  getBookingByTanggal,
  createBooking,
  updateBooking,
  deleteBooking,
};
