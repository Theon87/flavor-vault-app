import sequelize from '../config/connection.js';
import { RecipeFactory } from './recipe.js';
import { UserFactory } from './user.js';
import { GroceryListFactory } from './groceryList.js'; // Import the GroceryListFactory

// Initialize the models
const Recipe = RecipeFactory(sequelize);
const User = UserFactory(sequelize);
const GroceryList = GroceryListFactory(sequelize); // Initialize GroceryList

// Create associations between the models
// 1. A User can have many Recipes (One-to-Many)
User.hasMany(Recipe, {
    foreignKey: 'userId',
    as: 'recipes', // Alias for accessing related recipes
    onDelete: 'CASCADE', // Delete the user's recipes if the user is deleted
  });
  Recipe.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user', // Alias for accessing the recipe's user
  });
  // 2. A User can have many Grocery List Items (One-to-Many)
User.hasMany(GroceryList, {
    foreignKey: 'userId',
    as: 'groceryLists',
    onDelete: 'CASCADE',
  });
  GroceryList.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user',
  });




export { Recipe, User, GroceryList }; // Export the GroceryList model


