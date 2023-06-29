import asyncHandler from "../middlewares/asyncHandler.js";
import Order from "../models/orderModel.js";

// @desc Create new order
// @route POST /api/orders
// @access Private
const addOrderItems = asyncHandler(async function (req, res) {
  res.send("add order items");
});

// @desc Get logged in user orders
// @route GET /api/orders/myOrders
// @access Private
const getMyOrders = asyncHandler(async function (req, res) {
  res.send("get my orders");
});

// @desc Get order by id
// @route GET /api/orders/:id
// @access Private
const getOrderById = asyncHandler(async function (req, res) {
  res.send("get order by id");
});

// @desc Update order to paid
// @route GET /api/orders/:id/pay
// @access Private
const updateOrderToPaid = asyncHandler(async function (req, res) {
  res.send("update order to paid");
});

// @desc Update order to delivered
// @route GET /api/orders/:id/deliver
// @access Admin / Private
const updateOrderToDelivered = asyncHandler(async function (req, res) {
  res.send("update order to delivered");
});

// @desc Get all orders
// @route GET /api/orders
// @access Admin/ Private
const getOrders = asyncHandler(async function (req, res) {
  res.send("get all orders");
});

export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
};
