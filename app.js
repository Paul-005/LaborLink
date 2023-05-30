const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
const port = 3000;

// file imports
const home = require("./routes/home");
const search = require("./routes/search");
const add_worker = require("./routes/new_worker/add_user");

// middles
app.use(cors({ origin: "*" }));

// Define the route for the home page
app.get("/", (req, res) => {
  res.json("Hello World!");
});

// Mount the home route
app.use("/", home);
app.use("/", search);
app.use("/", add_worker);
// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
