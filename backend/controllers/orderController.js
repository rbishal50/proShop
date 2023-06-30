import asyncHandler from "../middlewares/asyncHandler.js";
import Order from "../models/orderModel.js";

// @desc Create new order
// @route POST /api/orders
// @access Private
const addOrderItems = asyncHandler(async function (req, res) {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;
  if (orderItems?.length === 0) {
    res.status(404);
    throw new Error("No order items!");
  }

  const order = new Order({
    user: req.user._id,
    orderItems: orderItems.map((item) => ({
      ...item,
      product: item._id,
      _id: undefined,
    })),
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  });

  const createOrder = await order.save();
  res.status(201).json(createOrder);
});

// @desc Get logged in user orders
// @route GET /api/orders/myOrders
// @access Private
const getMyOrders = asyncHandler(async function (req, res) {
  const orders = await Order.find({ user: req.user._id });
  res.status(200).json(orders);
});

// @desc Get order by id
// @route GET /api/orders/:id
// @access Private
const getOrderById = asyncHandler(async function (req, res) {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );
  if (!order) {
    res.status(404);
    throw new Error("Order not found!");
  }
  res.status(200).json(order);
});

// @desc Update order to paid
// @route PUT /api/orders/:id/pay
// @access Private
const updateOrderToPaid = asyncHandler(async function (req, res) {
  const order = await Order.findById(req.params.id);
  if (!order) throw new Error("Order not found!");

  order.isPaid = true;
  order.paidAt = Date.now();
  order.paymentResult = {
    id: req.body.id,
    status: req.body.status,
    update_time: req.body.update_time,
    email_address: req.body.payer.email_address,
  };
  const updateOrder = await order.save();
  res.status(200).json(updateOrder);
});

// @desc Update order to delivered
// @route PUT  /api/orders/:id/deliver
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
