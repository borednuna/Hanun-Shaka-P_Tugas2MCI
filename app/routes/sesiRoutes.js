const router = require('express').Router();
const sesiController = require('../controllers/sesiController');

router.get('/', sesiController.getAllSesi);

module.exports = router;