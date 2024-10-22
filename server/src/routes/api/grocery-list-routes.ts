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

// POST /api/grocery-list - Create a new grocery list item
router.post('/', async (req: Request, res: Response) => {
  const { id, itemName, quantity, userId } = req.body; //follows GroceryListAttributes interface
  try {
    const newItem = await GroceryList.create({ id, itemName, quantity, userId });
    console.log(`POST /grocery-list - New Item Created: `, newItem);
    res.status(201).json(newItem);

  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// PUT /api/grocery-list/:id - Update an existing grocery list item
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { itemName, quantity, userId} = req.body;

    const groceryItem = await GroceryList.findByPk(id);
    if (!groceryItem) {
      return res.status(404).json({ message: 'Item not found' });
    }

    await groceryItem.update({ itemName, quantity, userId });
    console.log(`PUT /grocery-list/${id} - Item Updated`);
    res.json(groceryItem);

  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE /api/grocery-list/:id - delete an existing grocery list item
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const groceryItem = await GroceryList.findByPk(id);
    if (!groceryItem) {
      return res.status(404).json({ message: 'Item not found' });
    }

    await groceryItem.destroy();
    console.log(`DELETE /grocery-list/${id} - Item Deleted`);
    res.json({ message: 'Item deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});


export { router as groceryListRouter }; // Export the router


