const express = require("express")
const cors = require("cors")

let recipes = require('./recipes.json')
const { valididateRecipe } = require("./recipes.js")

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", function (request, response) {
    response.send("Welcome to CYF recipes server");
});

app.get("/recipes/:id?", function(request, response) {
  const id = request.params.id;
  if (!id) return response.json(recipes)
  
  const recipe = recipes.find(r => id == r.id)
  if (recipe === undefined) return response.sendStatus(404)
  response.json(recipes);
});



app.post("/recipes", function (request, response) {
    const recipe = request.body
   // if (!valididateRecipe(recipe)) {
     //   return response.sendStatus(400)
   // }
    recipe.id = recipes.length+1
    recipes.push(recipe)
    response.status(201).json(recipe)
});

app.delete("/recipes/:id", function (request, response) {
  const id = request.params.id;
  if (id === undefined) return response.sendStatus(400)
  
  const recipe = recipes.find(item => item.id == id)
  if (recipe === undefined) return response.sendStatus(404)

  recipes = recipes.filter((item) => { return item.id != id })
  response.sendStatus(204)
})

app.listen(process.env.PORT);