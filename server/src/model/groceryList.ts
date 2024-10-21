import { Model, DataTypes, Optional, Sequelize } from "sequelize";

// Define the GroceryList attributes interface
interface GroceryListAttributes {
  id: number;
  itemName: string; // Name of the grocery item
  quantity: number;  // Quantity of the grocery item
  userId: number;    // Foreign key to associate with a user
}