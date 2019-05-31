

function valididateRecipe(recipe) {
  if (!recipe ||
      !recipe.title ||
      !recipe.ingredients ||
      !recipe.prepTime ||
      !recipe.steps ||
      !recipe.author ||
      !recipe.countryOfOrigin ||
      !recipe.course) {
    console.log('Recipe failed validation: ', { recipe })
    return false
  }
  return true
}


function updateRecipeInPlace(orig, changes) {
  orig.title = changes.title;
  orig.ingredients = changes.ingredients;
  orig.prepTime = changes.prepTime;
  orig.steps = changes.steps;
  orig.author = changes.author;
  orig.countryOfOrigin = changes.countryOfOrigin;
  orig.course = changes.course;
}

exports = { updateRecipeInPlace, valididateRecipe};