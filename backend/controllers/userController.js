import asyncHandler from "../middlewares/asyncHandler.js";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// @desc Auth user and get token
// @route POST /api/users/login
// @access Public
const authUser = asyncHandler(async function (req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await user.matchPassword(password))) {
    res.status(404);
    throw new Error("Invalid username or password!");
  }

  generateToken(res, user._id);

  res.status(200).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  });
});

// @desc Register user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async function (req, res) {
  const { name, email, password } = req.body;
  const hasUser = await User.findOne({ email });
  if (hasUser) {
    res.status(400);
    throw new Error("User already exists!");
  }

  const user = await User.create({ name, email, password });
  if (user) {
    generateToken(res, user._id);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc Logout user & clear cookie
// @route POST /api/users/logout
// @access Private
const logoutUser = asyncHandler(async function (req, res) {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out successfully!" });
});

// @desc Get user profile
// @route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async function (req, res) {
  const user = await User.findById(req.user._id);
  if (!user) {
    res.status(404);
    throw new Error("User not found!");
  }
  res.status(200).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  });
});

// @desc Update user profile
// @route PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async function (req, res) {
  const user = await User.findById(req.user._id);
  if (!user) {
    res.status(404);
    throw new Error("User not found!");
  }
  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;

  if (req.body.password) {
    user.password = req.body.password;
  }
  const updatedUser = await user.save();
  res.status(200).json({
    _id: updatedUser._id,
    name: updatedUser.name,
    email: updatedUser.email,
    isAdmin: updatedUser.isAdmin,
  });
});

// @desc Get all users
// @route GET /api/users
// @access Private/Admin
const getUsers = asyncHandler(async function (req, res) {
  const users = await User.find({});
  res.status(200).json(users);
});

// @desc Delete user
// @route DELETE /api/users/:id
// @access Private/Admin
const deleteUser = asyncHandler(async function (req, res) {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(404);
    throw new error("User not found!");
  }
  if (user.isAdmin) {
    res.status(400);
    throw new error("Cannot delete admin user!");
  }

  await User.deleteOne({ _id: user._id });
  res.status(200).json({ message: "User deleted successfully!" });
});

// @desc Get user by id
// @route GET /api/users/:id
// @access Private/Admin
const getUserById = asyncHandler(async function (req, res) {
  const user = await User.findById(req.params.id).select("-password");
  if (!user) {
    res.status(404);
    throw new error("User not found!");
  }

  res.status(200).json(user);
});

// @desc Update user by id
// @route PUT /api/users/:id
// @access Private/Admin
const updateUser = asyncHandler(async function (req, res) {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(404);
    throw new error("User not found!");
  }

  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;
  user.isAdmin = Boolean(req.body.isAdmin);

  const updatedUser = await user.save();
  res.status(200).json({
    _id: updatedUser._id,
    name: updatedUser.name,
    email: updateUser.email,
    isAdmin: updateUser.isAdmin,
  });
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
