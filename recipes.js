exports.valididateRecipe = (recipe) => {
  if (!recipe ||
      !recipe.name ||
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
