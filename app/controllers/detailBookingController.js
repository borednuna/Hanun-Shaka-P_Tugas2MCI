const detailBookingService = require("../services/detailBookingService");

const getAllDetailBooking = (req, res) => {
  detailBookingService
    .getAllDetailBooking()
    .then((detailBookings) => {
      res.status(200).json({
        status: "success",
        message: "detailBooking retrieved successfully",
        data: detailBookings,
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

const getDetailBookingById = (req, res) => {
  detailBookingService
    .getDetailBookingById(req.params.id)
    .then((detailBooking) => {
      res.status(200).json({
        status: "success",
        message: "detailBooking retrieved successfully",
        data: detailBooking,
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

const getDetailBookingByBooking = (req, res) => {
  detailBookingService
    .getDetailBookingByBooking(req.params.booking)
    .then((detailBooking) => {
      res.status(200).json({
        status: "success",
        message: "detailBooking retrieved successfully",
        data: detailBooking,
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

const getDetailBookingBySesi = (req, res) => {
  detailBookingService
    .getDetailBookingBySesi(req.params.sesi)
    .then((detailBooking) => {
      res.status(200).json({
        status: "success",
        message: "detailBooking retrieved successfully",
        data: detailBooking,
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

const createDetailBooking = (req, res) => {
  detailBookingService
    .createDetailBooking(req.body)
    .then((detailBooking) => {
      res.status(200).json({
        status: "success",
        message: "detailBooking created successfully",
        data: detailBooking,
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

const updateDetailBooking = (req, res) => {
  detailBookingService
    .updateDetailBooking(req.params.id, req.body)
    .then((detailBooking) => {
      res.status(200).json({
        status: "success",
        message: "detailBooking updated successfully",
        data: detailBooking,
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

const deleteDetailBooking = (req, res) => {
  detailBookingService
    .deleteDetailBooking(req.params.id)
    .then((detailBooking) => {
      res.status(200).json({
        status: "success",
        message: "detailBooking deleted successfully",
        data: detailBooking,
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
  getAllDetailBooking,
  getDetailBookingById,
  getDetailBookingByBooking,
  getDetailBookingBySesi,
  createDetailBooking,
  updateDetailBooking,
  deleteDetailBooking,
};
