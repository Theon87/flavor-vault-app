import sequelize from "../config/connection.js";
import { RecipeFactory } from "./recipe.js";
import { UserFactory } from "./user.js";
import { GroceryListFactory } from "./groceryList.js";

// Initialize the models
const Recipe = RecipeFactory(sequelize);
const User = UserFactory(sequelize);
const GroceryList = GroceryListFactory(sequelize);

// Create associations between the models

// 1. A User can have many Recipes (One-to-Many)
User.hasMany(Recipe, {
  foreignKey: { name: "userId", allowNull: false },
  as: "recipes", // Alias for accessing related recipes
  onDelete: "CASCADE", // Delete the user's recipes if the user is deleted
});
Recipe.belongsTo(User, {
  foreignKey: { name: "userId", allowNull: false },
  as: "user", // Alias for accessing the recipe's user
});

// 2. A User can have many Grocery List Items (One-to-Many)
User.hasMany(GroceryList, {
  foreignKey: { name: "userId", allowNull: false },
  as: "groceryLists",
  onDelete: "CASCADE",
});
GroceryList.belongsTo(User, {
  foreignKey: { name: "userId", allowNull: false },
  as: "user",
});

// 3. A Recipe can belong to many Grocery List Items (Many-to-Many)
Recipe.belongsToMany(GroceryList, {
  through: "RecipeGroceryList", // This will create a join table 'RecipeGroceryList'
  foreignKey: { name: "recipeId", allowNull: false },
  as: "groceryLists", // Alias for accessing related grocery lists
});
GroceryList.belongsToMany(Recipe, {
  through: "RecipeGroceryList",
  foreignKey: { name: "groceryListId", allowNull: false },
  as: "recipes",
});

// Sync the models with the database
sequelize
  .sync({ alter: true })
  .then(() => console.log("Models synchronized with the database."))
  .catch((err) => console.error("Error syncing models:", err));

export { Recipe, User, GroceryList };
