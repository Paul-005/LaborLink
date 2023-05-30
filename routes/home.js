const {Router} = require('express')
const route = Router()
// Routes
const home = route.get("/home", (req, res) => {
  res.json([
    {
      user: "Paul",
      age: "17",
    },
    {
      user: "Joel",
      age: "10",
    },
  ]);
});
module.exports = home;
