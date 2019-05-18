const express = require("express")
const cors = require("cors")

const recipes = require('./recipes.json')
const { valididateRecipe } = require("./recipes.js")

const app = express()

app.use(express.json())
app.use(cors())

  
app.get("/", function (request, response) {
    response.send("Welcome to CYF recipes");
});

app.post("/recipes", function (request, response) {
    const recipe = request.body
    if (!valididateRecipe(recipe)) {
        return response.sendStatus(400)
    }
    recipe.id = recipes.length+1
    recipes.push(recipe)
    response.status(201).json(recipe)
});

app.get("/recipes/:id?", function(request, response) {
  const id = request.params.id;
  if (!id) return response.json(recipes)
  
  const recipe = recipes.find(r => id == r.id)
  if (recipe === undefined) return response.sendStatus(404)
  response.json(recipe)
});


app.listen(process.env.PORT);
