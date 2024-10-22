import express from 'express';
import type { Request, Response } from 'express';
import { GroceryList } from '../../model/index.js'; // Import the GroceryList model

const router = express.Router();

// GET api/grocery-list - Get all grocery list items
router.get('/', async (_req: Request, res: Response) => {
  try {
    const groceryItems = await GroceryList.findAll(); // Fetch all grocery list items
    console.log('GET /grocery-list'); // Log the request
    res.json(groceryItems); // Respond with the list of items
  } catch (error: any) {
    res.status(500).json({ message: error.message }); // Handle errors
  }
});


export { router as groceryListRouter }; // Export the router


