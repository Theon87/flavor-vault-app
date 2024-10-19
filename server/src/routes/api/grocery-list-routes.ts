import express from 'express';
import type { Request, Response } from 'express';
// import { GroceryList } from '../../models/index.js'; // Import the GroceryList model once it's defined

const router = express.Router();

// GET api/grocery-list - Get all grocery list items
router.get('/', async (_req: Request, res: Response) => {
  try {
    // const groceryListItems = await GroceryList.findAll();
    // res.json(groceryListItems);
    console.log('GET /grocery-list');
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// Optionally, you can add more routes for POST, PUT, DELETE if needed.

// POST api/grocery-list - Add a new grocery item (example)
// router.post('/', async (req: Request, res: Response) => {
//   try {
//     const { itemName, quantity } = req.body;
//     const newItem = await GroceryList.create({ itemName, quantity });
//     res.status(201).json(newItem);
//   } catch (error: any) {
//     res.status(500).json({ message: error.message });
//   }
// });

export { router as groceryListRouter };

