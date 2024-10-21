import sequelize from '../config/connection.js';
import { RecipeFactory } from './recipe.js';
import { UserFactory } from './user.js';
import { GroceryListFactory } from './grocerylist.js'; // Import the GroceryListFactory

// Initialize the models
const Recipe = RecipeFactory(sequelize);
const User = UserFactory(sequelize);
const GroceryList = GroceryListFactory(sequelize); // Initialize GroceryList

// Create associations between the models
User.hasOne(GroceryList, {
    onDelete: 'CASCADE',
});

Recipe.belongsTo(User);

User.hasMany(Recipe, {
    onDelete: 'CASCADE',
});

export { Recipe, User, GroceryList }; // Export the GroceryList model


