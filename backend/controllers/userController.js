import asyncHandler from "../middlewares/asyncHandler.js";

// @desc Auth user and get token
// @route POST /api/users/login
// @access Public
const authUser = asyncHandler(async function (req, res) {
  res.send("auth user");
});

// @desc Register user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async function (req, res) {
  res.send("register  user");
});

// @desc Logout user & clear cookie
// @route POST /api/users/logout
// @access Private
const logoutUser = asyncHandler(async function (req, res) {
  res.send("logout user");
});

// @desc Get user profile
// @route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async function (req, res) {
  res.send("get user profile");
});

// @desc Update user profile
// @route PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async function (req, res) {
  res.send("update user profile");
});

// @desc Get all users
// @route GET /api/users
// @access Private/Admin
const getUsers = asyncHandler(async function (req, res) {
  res.send("get users (admin)");
});

// @desc Delete user
// @route DELETE /api/users/:id
// @access Private/Admin
const deleteUser = asyncHandler(async function (req, res) {
  res.send("delete user");
});

// @desc Get user by id
// @route GET /api/users/:id
// @access Private/Admin
const getUserById = asyncHandler(async function (req, res) {
  res.send("get user by id");
});

// @desc Update user by id
// @route PUT /api/users/:id
// @access Private/Admin
const updateUser = asyncHandler(async function (req, res) {
  res.send("Update user");
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
};
