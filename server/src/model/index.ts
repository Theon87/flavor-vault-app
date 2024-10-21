import sequelize from '../config/connection.js';
import { RecipeFactory } from './recipe.js';
import { UserFactory } from './user.js';
import { GroceryListFactory } from './groceryList.js'; // Import the GroceryListFactory

// Initialize the models
const Recipe = RecipeFactory(sequelize);
const User = UserFactory(sequelize);
const GroceryList = GroceryListFactory(sequelize); // Initialize GroceryList

// Create associations between the models

export { Recipe, User, GroceryList }; // Export the GroceryList model


