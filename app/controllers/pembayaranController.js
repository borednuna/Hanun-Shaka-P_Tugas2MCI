const pembayaranService = require('../services/pembayaranService');

const getAllPembayaran = (req, res) => {
  pembayaranService.getAllPembayaran()
    .then((pembayarans) => {
      res.status(200).json({
        status: "success",
        message: "Pembayaran retrieved successfully",
        data: pembayarans
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

const getPembayaranById = (req, res) => {
  pembayaranService.getPembayaranById(req.params.id)
    .then((pembayaran) => {
      res.status(200).json({
        status: "success",
        message: "Pembayaran retrieved successfully",
        data: pembayaran
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

const getPembayaranByTanggal = (req, res) => {
  pembayaranService.getPembayaranByTanggal(req.params.tanggal)
    .then((pembayarans) => {
      res.status(200).json({
        status: "success",
        message: "Pembayaran retrieved successfully",
        data: pembayarans
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

const createPembayaran = (req, res) => {
  pembayaranService.createPembayaran(req.body)
    .then((pembayaran) => {
      res.status(200).json({
        status: "success",
        message: "Pembayaran created successfully",
        data: pembayaran
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

const updatePembayaran = (req, res) => {
  pembayaranService.updatePembayaran(req.params.id, req.body)
    .then((pembayaran) => {
      res.status(200).json({
        status: "success",
        message: "Pembayaran updated successfully",
        data: pembayaran
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

const deletePembayaran = (req, res) => {
  pembayaranService.deletePembayaran(req.params.id)
    .then((pembayaran) => { 
      res.status(200).json({
        status: "success",
        message: "Pembayaran deleted successfully",
        data: pembayaran
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
  getAllPembayaran,
  getPembayaranById,
  getPembayaranByTanggal,
  createPembayaran,
  updatePembayaran,
  deletePembayaran
}
