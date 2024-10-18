import { Router, Request, Response } from 'express';
import { GroceryList, GroceryItem } from '../models/grocery'; // Assuming models exist
import { authenticateToken } from '../middleware/auth'; // Middleware to check user authentication

const router = Router();

// Route to get all grocery items in the list
router.get('/', authenticateToken, async (req: Request, res: Response) => {
  try {
    const groceryList = await GroceryList.findAll({ where: { userId: req.user?.id } });
    res.json(groceryList);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch grocery list' });
  }
});

// Route to add an item to the grocery list
router.post('/add', authenticateToken, async (req: Request, res: Response) => {
  const { itemName, quantity } = req.body;

  if (!itemName || !quantity) {
    return res.status(400).json({ error: 'Item name and quantity are required' });
  }

  try {
    const newItem = await GroceryItem.create({
      userId: req.user?.id,
      itemName,
      quantity,
      purchased: false,
    });
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add item to grocery list' });
  }
});

// Route to update the quantity of an item in the grocery list
router.put('/update/:id', authenticateToken, async (req: Request, res: Response) => {
  const { id } = req.params;
  const { quantity } = req.body;

  try {
    const item = await GroceryItem.findOne({ where: { id, userId: req.user?.id } });
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }

    item.quantity = quantity;
    await item.save();
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update item quantity' });
  }
});

// Route to mark an item as purchased
router.put('/mark-purchased/:id', authenticateToken, async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const item = await GroceryItem.findOne({ where: { id, userId: req.user?.id } });
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }

    item.purchased = true;
    await item.save();
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'Failed to mark item as purchased' });
  }
});

// Route to delete an item from the grocery list
router.delete('/delete/:id', authenticateToken, async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const item = await GroceryItem.findOne({ where: { id, userId: req.user?.id } });
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }

    await item.destroy();
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete item' });
  }
});

export default router;
