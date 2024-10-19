import sequelize from '../config/connection.js';
import { RecipeFactory } from './recipe.js';

// Initialize the models

const Recipe = RecipeFactory(sequelize);

// Create associations between the models


export { sequelize, Recipe };
