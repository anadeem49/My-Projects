var express = require("express");

var router = express.Router();
// do we have task model
//const task = require("../model/Task");

var fs = require("fs");
const order = require("../model/order");
const processOrder = require("./process-order");
//sconst Product = require("../model/product");
// @end point : /api/tasks/create
// @description : to create a new task,
// @access public

router.post("/api/v1/orders", (req, res) => {
  const {
    id,
    name,
    email,
    orderPlacedOn,
    isDelivered,
    orderDeliveredOn,
    status,
    cart,
  } = req.body;
  const order = new order(
    id,
    name,
    email,
    orderPlacedOn,
    isDelivered,
    orderDeliveredOn,
    status,
    cart
  );
  order.save();
  res.json({ status: "success" });
});

//edit orders
router.put("/api/v1/orders/:id", (req, res) => {
  const {
    id,
    name,
    email,
    orderPlacedOn,
    isDelivered,
    orderDeliveredOn,
    status,
    cart,
  } = req.body;
  const order = new order(
    id,
    name,
    email,
    orderPlacedOn,
    isDelivered,
    orderDeliveredOn,
    status,
    cart
  );
  order
    .findByIdAndUpdate({ _id: req.params.id }, order)
    .then(() => {
      res.status(201).json({
        message: "Order updated successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
});

// // @end point : /api/tasks/
// // @description : to get a list of tasks,
// // @method : get
// // @access public
// router.get("/", (req, res) => {
//   // it should return all tasks
//   product.find().then((p) => {
//     if (!t) {
//       return res.status(404).json({ status: "no products found" });
//     }
//     return res.status(200).json(p);
//   });
// });

// // @end point : /api/tasks/:id
// // @description : to get the details of a particular task whose id provided.
// // @method : get
// // @access public
// router.get("/api/v1/products/:PRODUCT_ID", (req, res) => {
//   const data = req.params.id;
//   product
//     .findById(data)
//     .then((p) => {
//       if (p != null) {
//         return res.status(200).json(p);
//       } else {
//         return res.status(404).json({ msg: "no product found" });
//       }
//     })
//     .catch((err) => {
//       return res.status(500).json({ msg: "internal error " });
//     });
// });

router.delete("/api/v1/admin/orders/:id", (req, res) => {
  order.findByIdAndDelete(req.params.id).then((o) => {
    if (o != null) {
      return res.status(204).json({ msg: "order deleted successfully" });
    } else {
      return res.status(404).json({ msg: "order not found" });
    }
  });
});

processOrder();

// will delete all records
// router.delete("/", (req, res) => {
//   product.collection.drop().then((t) => {
//     return res.status(200).json({ msg: "all products deleted successfully" });
//   });
// });

module.exports = router;
