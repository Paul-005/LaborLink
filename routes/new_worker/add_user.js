const { Router } = require("express");
const route = Router();

const new_worker = route.post("/add_worker", (req, res) => {
  // const {
  //   name,
  //   email,
  //   password,
  //   phone,
  // address,
  // city,
  // state,
  // zip,
  // country,
  // category,
  // } = req.body;
  // const new_worker = {
  //   name: name,
  //   email: email,
  //   password: password,
  //   phone: phone,
  // address: address,
  // city: city,
  // state: state,
  // zip: zip,
  // country: country,
  // category: category,
  // };
  console.log("ho", req.body);
});

module.exports = new_worker;
