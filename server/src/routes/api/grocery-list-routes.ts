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
 
// GET /api/grocery-list/:id - Retrieve a grocery list item by id
router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const groceryItem = await GroceryList.findByPk(id);

    if (!groceryItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    console.log(`GET /grocery-list/${id} - Item Retrieved`, groceryItem);
    res.json(groceryItem);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export { router as groceryListRouter }; // Export the router


