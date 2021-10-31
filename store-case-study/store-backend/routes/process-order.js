const order = require("../model/order");

function processOrder() {
  order.isDelivered = true;
  order.orderDeliveredOn = Date.now();
  order.status = "order delivered";
}

module.exports = processOrder();
