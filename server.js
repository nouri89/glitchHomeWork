const express = require("express");
const cors = require("cors");

const recipes = require("./recipes.json");
const { valididateRecipe, updateRecipeInPlace } = require("./recipes.js");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", function(request, response) {
  response.send("Welcome to CYF recipes server");
});

app.get("/recipes", function(request, response) {
  response.json(recipes);
});

app.get("/recipes/:id", function(request, response) {
  const id = request.params.id;
  const recipe = recipes.find(r => id == r.id);
  if (recipe) {
    response.json(recipe);
  } else {
    response.sendStatus(404);
  }
});

app.post("/recipes", function(request, response) {
  const recipe = request.body;
  recipe.id = recipes.length + 1;
  recipes.push(recipe);
  response.status(201).json(recipe);
});

app.put("/recipes/:id", function(request, response) {
  const id = request.params.id;

  const recipeSubmitted = request.body;

  const existingRecipe = recipes.find(r => id == r.id);
  if (existingRecipe) {
    updateRecipeInPlace(existingRecipe, recipeSubmitted);
    response.json(existingRecipe);
  } else {
    response.sendStatus(404);
  }
});

app.delete("/recipes/:id", function(request, response) {
  const id = request.params.id;

  const indexToDelete = recipes.findIndex(item => item.id == id);
  if (indexToDelete >= 0) {
    recipes.splice(indexToDelete, 1);
    response.sendStatus(204);
  } else {
    response.sendStatus(404);
  }
});

app.listen(process.env.PORT);
