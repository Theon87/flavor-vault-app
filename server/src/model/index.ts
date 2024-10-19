import sequelize from '../config/connection.js';
// import { RecipeFactory } from './recipe.js';
import { UserFactory } from './user.js';

// Initialize the models

// const Recipe = RecipeFactory(sequelize);
const User = UserFactory(sequelize);

// Create associations between the models


export { sequelize, User };
