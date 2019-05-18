const express = require("express")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

/* {
  name: str, 
  ingreds: []str, 
  prepTime: num,  // minutes?
  steps: []str, 
  author: str,
  countryOfOrigin: str,
  course: enum[Starter, Main, Dessert]
}
*/

const adana = {
  id: 1,
  name: "adana",
  ingredients: [
    "1 kg ground lamb",
    "Kosher salt",
    "4 teaspoons ground cumin, divided",
    "4 tablespoons ground sumac, divided",
    "4 tablespoon ground Urfa pepper flakes, divided",
    "4 tablespoons ice-cold water"
  ],
  image: "https://upload.wikimedia.org/wikipedia/commons/5/55/Adana_kebab.jpg",
  prepTime: 60,
  steps: [
    "1. For the Kebabs: Combine lamb with 7.5 grams (about 2 teaspoons) kosher salt, 1 teaspoon cumin, 2 teaspoons sumac, and 1 tablespoon pepper flakes. Knead by hand or in a stand mixer fitted with a paddle attachment until mixture turns tacky and starts sticking to the side of the bowl. Add water and continue kneading until incorporated. Place in refrigerator and chill well.",
    "2. Meanwhile, combine remaining teaspoon cumin, 2 teaspoons sumac, remaining tablespoon pepper flakes, and 2 teaspoons salt in a small bowl. Set spice mixture aside. Combine remaining 2 teaspoons sumac and red onions in a medium bowl. Season with salt to taste and set aside.",
    "3. Using wet hands, divide lamb mixture into 12 even balls. Using wet hands, form each ball into a long, flat kebab around a skewer.",
    "4. Light one chimney full of charcoal. When all the charcoal is lit and covered with gray ash, pour out and arrange the coals on one side of the charcoal grate. Set cooking grate in place, cover grill and allow to preheat for 5 minutes. Alternatively, set half the burners on a gas grill to the highest heat setting, cover, and preheat for 10 minutes. Clean and oil the grilling grate. Place kebabs directly over hot side of grill, cover, and cook, turning occasionally and sprinkling with spice mixture until well charred on both sides and kebabs are cooked through, about 12 minutes total.",
    "5. During last few minutes of cooking, place bread directly on top of kebabs in batches until heated through.",
    "6. Serve kebabs with warm bread, sumac onions, parsley, tomatoes, and pickled peppers."
  ],
  author: "Mohammad",
  countryOfOrigin: "Turkey",
  category: "Meat",    
  course: "Main"
}

const somethingElse = {
    id: 2,
  name: "adana",
  ingredients: [
    "1 kg ground lamb",
    "Kosher salt",
    "4 teaspoons ground cumin, divided",
    "4 tablespoons ground sumac, divided",
    "4 tablespoon ground Urfa pepper flakes, divided",
    "4 tablespoons ice-cold water"
  ],
  image: "https://upload.wikimedia.org/wikipedia/commons/5/55/Adana_kebab.jpg",
  prepTime: 60,
  steps: [
    "1. For the Kebabs: Combine lamb with 7.5 grams (about 2 teaspoons) kosher salt, 1 teaspoon cumin, 2 teaspoons sumac, and 1 tablespoon pepper flakes. Knead by hand or in a stand mixer fitted with a paddle attachment until mixture turns tacky and starts sticking to the side of the bowl. Add water and continue kneading until incorporated. Place in refrigerator and chill well.",
    "2. Meanwhile, combine remaining teaspoon cumin, 2 teaspoons sumac, remaining tablespoon pepper flakes, and 2 teaspoons salt in a small bowl. Set spice mixture aside. Combine remaining 2 teaspoons sumac and red onions in a medium bowl. Season with salt to taste and set aside.",
    "3. Using wet hands, divide lamb mixture into 12 even balls. Using wet hands, form each ball into a long, flat kebab around a skewer.",
    "4. Light one chimney full of charcoal. When all the charcoal is lit and covered with gray ash, pour out and arrange the coals on one side of the charcoal grate. Set cooking grate in place, cover grill and allow to preheat for 5 minutes. Alternatively, set half the burners on a gas grill to the highest heat setting, cover, and preheat for 10 minutes. Clean and oil the grilling grate. Place kebabs directly over hot side of grill, cover, and cook, turning occasionally and sprinkling with spice mixture until well charred on both sides and kebabs are cooked through, about 12 minutes total.",
    "5. During last few minutes of cooking, place bread directly on top of kebabs in batches until heated through.",
    "6. Serve kebabs with warm bread, sumac onions, parsley, tomatoes, and pickled peppers."
  ],
  author: "Mohammad",
  countryOfOrigin: "Turkey",
  category: "Meat",    
  course: "Main"
}


const recipes = [adana, somethingElse]

function valididateRecipe(recipe) {
  if (!recipe ||
      !recipe.title ||
      !recipe.ingredients ||
      !recipe.prepTime ||
      !recipe.steps ||
      !recipe.author ||
      !recipe.countryOfOrigin ||
      !recipe.course) {
    return false
  }
  return true
}
  

app.get("/", function (request, response) {
    response.send("Welcome to CYF recipes");
});

app.post("/recipes", function (request, response) {
    const recipe = request.body
    if (!valididateRecipe(recipe)) {
        response.sendStatus(400)
    }
    recipe.id = recipes.length+1
    recipes.push(recipe)
    response.status(201).json(recipe)
});

app.get("/recipes/:id?", function(request, response) {
  const id = request.params.id;
  if (!id) response.json(recipes)
  
  const recipe = recipes.find(r => id == r.id)
  if (recipe === undefined) response.sendStatus(404)
  response.json(recipe)
});


app.listen(process.env.PORT);
