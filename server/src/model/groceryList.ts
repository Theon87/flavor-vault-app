import { Model, DataTypes, Optional, Sequelize } from "sequelize";

// Define the GroceryList attributes interface
interface GroceryListAttributes {
  id: number;
  itemName: string; // Name of the grocery item
  quantity: string;  // Quantity of the grocery item, accounting for unit
  userId: number;    // Foreign key to associate with a user
}
// Define the attributes required during creation (id is excluded)
interface GroceryListCreationAttributes extends Optional<GroceryListAttributes, "id"> {}

// Define the GroceryList model class
export class GroceryList
  extends Model<GroceryListAttributes, GroceryListCreationAttributes>
  implements GroceryListAttributes
{
    public id!: number;
    public itemName!: string;
    public quantity!: string;
    public userId!: number;
  }

  // Initialize the model with Sequelize
export function GroceryListFactory(sequelize: Sequelize): typeof GroceryList {
    GroceryList.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        itemName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        quantity: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "GroceryList",
        tableName: "grocery_lists", // Change to your actual table name
      }
    );
  
    return GroceryList;
  }
  
  export default GroceryList;