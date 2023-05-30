const { Router } = require("express");
const route = Router();

// Define the route for the search page
const search = route.get("/search", (req, res) => {
  // Get the search term from the request
  const searchTerm = req.query.term;

  // Get the list of categories from the database
  const categories = [
    {
      name: "Sweepers",
      workers: [
        {
          name: "The Alchemist",
          author: "Paulo Coelho",
        },
        {
          title: "The Lord of the Rings",
          author: "J.R.R. Tolkien",
        },
      ],
    },
    {
      name: "Plumbers",
      items: [
        {
          title: "The Shawshank Redemption",
          director: "Frank Darabont",
        },
        {
          title: "The Godfather",
          director: "Francis Ford Coppola",
        },
      ],
    },
  ];

  // Find the categories that match the search term
  const matchingCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Send the list of matching categories to the client
  res.json(matchingCategories);
});

module.exports = search;
