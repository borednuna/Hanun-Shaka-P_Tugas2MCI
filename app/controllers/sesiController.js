const sesiService = require('../services/sesiService');

exports.getAllSesi = (req, res) => {
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
