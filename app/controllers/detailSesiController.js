const detailSesiService = require("../services/detailSesiService");

const getAllDetailSesi = (req, res) => {
  detailSesiService
    .getAllDetailSesi()
    .then((detailSesis) => {
      res.status(200).json({
        status: "success",
        message: "detailSesi retrieved successfully",
        data: detailSesis,
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

const getDetailSesiById = (req, res) => {
  detailSesiService
    .getDetailSesiById(req.params.id)
    .then((detailSesi) => {
      res.status(200).json({
        status: "success",
        message: "detailSesi retrieved successfully",
        data: detailSesi,
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

const getDetailSesiByBooking = (req, res) => {
  detailSesiService
    .getDetailSesiByBooking(req.params.booking)
    .then((detailSesi) => {
      res.status(200).json({
        status: "success",
        message: "detailSesi retrieved successfully",
        data: detailSesi,
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

const getDetailSesiBySesi = (req, res) => {
  detailSesiService
    .getDetailSesiBySesi(req.params.sesi)
    .then((detailSesi) => {
      res.status(200).json({
        status: "success",
        message: "detailSesi retrieved successfully",
        data: detailSesi,
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

const createDetailSesi = (req, res) => {
  detailSesiService
    .createDetailSesi(req.body)
    .then((detailSesi) => {
      res.status(200).json({
        status: "success",
        message: "detailSesi created successfully",
        data: detailSesi,
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

const updateDetailSesi = (req, res) => {
  detailSesiService
    .updateDetailSesi(req.params.id, req.body)
    .then((detailSesi) => {
      res.status(200).json({
        status: "success",
        message: "detailSesi updated successfully",
        data: detailSesi,
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

const deleteDetailSesi = (req, res) => {
  detailSesiService
    .deleteDetailSesi(req.params.id)
    .then((detailSesi) => {
      res.status(200).json({
        status: "success",
        message: "detailSesi deleted successfully",
        data: detailSesi,
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
  getAllDetailSesi,
  getDetailSesiById,
  getDetailSesiByBooking,
  getDetailSesiBySesi,
  createDetailSesi,
  updateDetailSesi,
  deleteDetailSesi,
};
