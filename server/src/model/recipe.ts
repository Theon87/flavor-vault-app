import { Model, DataTypes, Optional, Sequelize } from "sequelize";

// Define the Recipe attributes interface
interface RecipeAttributes {
  id: number;
  title: string;
  image: string;
  readyInMinutes: number; // in minutes
  servings: number; // number of servings
  ingredients: string; // array of ingredients
  instructions: string; // cooking instructions
  userId: number; // foreign key to associate with a user
}

// Define the attributes required during creation (id is excluded)
interface RecipeCreationAttributes extends Optional<RecipeAttributes, "id"> {}

// Define the Recipe model class
export class Recipe
  extends Model<RecipeAttributes, RecipeCreationAttributes>
  implements RecipeAttributes
{
  public id!: number;
  public title!: string;
  public image!: string;
  public readyInMinutes!: number;
  public servings!: number;
  public ingredients!: string;
  public instructions!: string;
  public userId!: number;
}

// Initialize the model with Sequelize
export function RecipeFactory(sequelize: Sequelize): typeof Recipe {
  Recipe.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      readyInMinutes: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      servings: {
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
    },
    {
      sequelize,
      modelName: "Recipe",
      tableName: "recipes",
    }
  );

  return Recipe;
}

export default Recipe;
