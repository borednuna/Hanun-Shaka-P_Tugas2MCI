const sesiService = require('../services/sesiService');

const getAllSesi = (req, res) => {
  sesiService.getAllSesi()
    .then((sesis) => {
      res.status(200).json({
        status: "success",
        message: "Sesi retrieved successfully",
        data: sesis
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: "error",
        message: error.message,
        data: error
      });
    });
}

const getSesiById = (req, res) => {
  sesiService.getSesiById(req.params.id)
    .then((sesi) => {
      res.status(200).json({
        status: "success",
        message: "Sesi retrieved successfully",
        data: sesi
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: "error",
        message: error.message,
        data: error
      });
    });
}

const getSesiByPemateri = (req, res) => {
  sesiService.getSesiByPemateri(req.params.pemateri)
    .then((sesis) => {
      res.status(200).json({
        status: "success",
        message: "Sesi retrieved successfully",
        data: sesis
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: "error",
        message: error.message,
        data: error
      });
    });
}

const getSesiByTanggal = (req, res) => {
  sesiService.getSesiByTanggal(req.params.tanggal)
    .then((sesis) => {
      res.status(200).json({
        status: "success",
        message: "Sesi retrieved successfully",
        data: sesis
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: "error",
        message: error.message,
        data: error
      });
    });
}

const getSesiByWaktu = (req, res) => {
  sesiService.getSesiByWaktu(req.params.waktu)
    .then((sesis) => {
      res.status(200).json({
        status: "success",
        message: "Sesi retrieved successfully",
        data: sesis
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: "error",
        message: error.message,
        data: error
      });
    });
}

const createSesi = (req, res) => {
  sesiService.createSesi(req.body)
    .then((sesi) => {
      res.status(200).json({
        status: "success",
        message: "Sesi created successfully",
        data: sesi
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: "error",
        message: error.message,
        data: error
      });
    });
}

const updateSesi = (req, res) => {
  sesiService.updateSesi(req.params.id, req.body)
    .then((sesi) => {
      res.status(200).json({
        status: "success",
        message: "Sesi updated successfully",
        data: sesi
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: "error",
        message: error.message,
        data: error
      });
    });
}

const deleteSesi = (req, res) => {
  sesiService.deleteSesi(req.params.id)
    .then((sesi) => { 
      res.status(200).json({
        status: "success",
        message: "Sesi deleted successfully",
        data: sesi
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: "error",
        message: error.message,
        data: error
      });
    });
}

module.exports = {
  getAllSesi,
  getSesiById,
  getSesiByPemateri,
  getSesiByTanggal,
  getSesiByWaktu,
  createSesi,
  updateSesi,
  deleteSesi
}
