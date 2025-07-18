import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import User from "../models/userModel.js";

// Protect routes
const protect = asyncHandler(async (req, res, next) => {
  // Read the token from the cookie
  const token = req?.cookies?.jwt;
  if (!token) {
    res.status(401);
    throw new Error("Not authorized! No token!!");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.userId).select("-password");
    next();
  } catch (error) {
    console.log(error);
    res.status(401);
    throw new Error("Not authorized! Failed token!!");
  }
});

// Admin middleware
const admin = (req, res, next) => {
  if (!req?.user?.isAdmin) {
    res.status(401);
    throw new Error("Not authorized as admin!");
  }

  next();
};

export { protect, admin };
