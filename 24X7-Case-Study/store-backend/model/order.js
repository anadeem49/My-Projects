const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  orderPlacedOn: {
    type: Date,
    required: true,
  },
  isDelivered: {
    type: boolean,
    required: true,
  },
  orderDeliveredOn: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
  },
  cart: {
    type: [],
    required: true,
  },
});

module.exports = Order = mongoose.model("order", OrderSchema);
