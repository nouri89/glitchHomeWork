exports.valididateRecipe = (recipe) => {
  if (!recipe ||
      !recipe.title ||
      !recipe.ingredients ||
      !recipe.prepTime ||
      !recipe.steps ||
      !recipe.author ||
      !recipe.countryOfOrigin ||
      !recipe.course) {
    console.log(' bad ', { recipe })
    return false
  }
  return true
}
