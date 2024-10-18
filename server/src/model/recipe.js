import { Model, DataTypes } from "sequelize";
import { sequelize } from "../path/to/sequelizeInstance"; // replace with the actual path
// Define the Recipe model class
class Recipe extends Model {
}
// Initialize the model with Sequelize
Recipe.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    prepTime: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    ingredients: {
        type: DataTypes.ARRAY(DataTypes.STRING), // PostgreSQL array type
        allowNull: false,
    },
    instructions: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: "Recipe",
    tableName: "recipes",
});
export default Recipe;
