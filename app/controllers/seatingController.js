const seatingService = require("../services/seatingService");

const getAllSeating = (req, res) => {
  seatingService
    .getAllSeating()
    .then((seatings) => {
      res.status(200).json({
        status: "success",
        message: "Seating retrieved successfully",
        data: seatings,
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

const getSeatingById = (req, res) => {
  seatingService
    .getSeatingById(req.params.id)
    .then((seating) => {
      res.status(200).json({
        status: "success",
        message: "Seating retrieved successfully",
        data: seating,
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

const getSeatingBySesi = (req, res) => {
  seatingService
    .getSeatingBySesi(req.params.sesi)
    .then((seatings) => {
      res.status(200).json({
        status: "success",
        message: "Seating retrieved successfully",
        data: seatings,
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

const getSeatingByKetersediaan = (req, res) => {
  seatingService
    .getSeatingByKetersediaan(req.params.ketersediaan)
    .then((seatings) => {
      res.status(200).json({
        status: "success",
        message: "Seating retrieved successfully",
        data: seatings,
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

const getSeatingByBaris = (req, res) => {
  seatingService
    .getSeatingByBaris(req.params.baris)
    .then((seatings) => {
      res.status(200).json({
        status: "success",
        message: "Seating retrieved successfully",
        data: seatings,
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

const createSeating = (req, res) => {
  const seating = req.body;
  seatingService
    .createSeating(seating)
    .then((newSeating) => {
      res.status(201).json({
        status: "success",
        message: "Seating added successfully",
        data: newSeating,
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

const updateSeating = (req, res) => {
  const id = req.params.id;
  const seating = req.body;
  seatingService
    .updateSeating(id, seating)
    .then((updatedSeating) => {
      res.status(200).json({
        status: "success",
        message: "Seating updated successfully",
        data: updatedSeating,
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

const deleteSeating = (req, res) => {
  const id = req.params.id;
  seatingService
    .deleteSeating(id)
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "Seating deleted successfully",
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
  getAllSeating,
  getSeatingById,
  getSeatingBySesi,
  getSeatingByKetersediaan,
  getSeatingByBaris,
  createSeating,
  updateSeating,
  deleteSeating,
};
