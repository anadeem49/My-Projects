var express = require("express");

var app = express(); // we are creating express instance / server instance

// conect to mongo db conection
const connectDB = require("./config/connect-db");

// to handle the paths
const path = require("path");

connectDB();

// all reqest and esponses mostly will use json format for exchanging the data object
app.use(express.json({ extended: false }));
// this application will use only json format for exchaging the data object.
// http methods
// get : to retrieve the data
// post : to creating the new data object
// put : to updating the data object
// delete : to deleting the data object

// user router spec
const user = require("./routes/userRoutes");
// it will refer user router spec.

// task router spec
const product = require("./routes/productRoutes");
const order = require("./routes/orderRoutes");
const port = 8080;
// task
// user
// app.get("/test", function (req, res) {
//   res.json({ data: "success" });
// });

app.listen(port, console.log(`server is running on port ${port}`));

app.use("/api/v1/users", user);
app.use("/api/v1/products", product);
app.use("/api/v1/orders", order);
