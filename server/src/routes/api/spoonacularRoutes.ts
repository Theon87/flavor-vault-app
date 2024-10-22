import express from 'express';
import type { Request, Response } from 'express';


const router = express.Router();

// GET api/recipes- Get all grocery list items
router.get('/recipes', async (_req: Request, res: Response) => {
  const { query } = req.body;
  try {
    const recipe = await Recipes.findAll(); // Fetch recipe from api
    console.log('GET /recipes'); // Log the request
    res.json(query); // Respond with the recipe
  } catch (error: any) {
    res.status(500).json({ message: error.message }); // Handle errors
  }
});
 


export { router as spoonacularRouter }; // Export the router


