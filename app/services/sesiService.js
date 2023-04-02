const sesiRepository = require('../repositories/sesiRepository');

exports.getAllSesi = async () => {
    try {
        const sesis = sesiRepository.getAllSesi();
        return sesis;
    }
    catch (error) {
        throw error;
    }
}
