const userService = require("../services/userService");

const getAllUser = (req, res) => {
  userService
    .getAllUser()
    .then((users) => {
      res.status(200).json({
        status: "success",
        message: "User retrieved successfully",
        data: users,
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

const getUserById = (req, res) => {
  userService
    .getUserById(req.params.id)
    .then((user) => {
      res.status(200).json({
        status: "success",
        message: "User retrieved successfully",
        data: user,
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

const getUserByNama = (req, res) => {
  userService
    .getUserByNama(req.params.nama)
    .then((users) => {
      res.status(200).json({
        status: "success",
        message: "User retrieved successfully",
        data: users,
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

const createUser = (req, res) => {
  const user = req.body;
  userService
    .createUser(user)
    .then((newUser) => {
      res.status(201).json({
        status: "success",
        message: "User added successfully",
        data: newUser,
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

const updateUser = (req, res) => {
  const id = req.params.id;
  const user = req.body;
  userService
    .updateUser(id, user)
    .then((updatedUser) => {
      res.status(200).json({
        status: "success",
        message: "User updated successfully",
        data: updatedUser,
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

const deleteUser = (req, res) => {
  const id = req.params.id;
  userService
    .deleteUser(id)
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "User deleted successfully",
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
  getAllUser,
  getUserById,
  getUserByNama,
  createUser,
  updateUser,
  deleteUser,
};
