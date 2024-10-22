import express from 'express';
import type { Request, Response } from 'express';
import { Recipe } from '../../model/index';


const router = express.Router();

// GET api/recipes- Get all recipe items
router.get('/recipes', async (_req: Request, res: Response) => {
  try {
    const recipes = await Recipe.findAll(); // Fetch recipe from api
    console.log('GET /recipes'); // Log the request
    res.json(recipes); // Respond with the recipe
  } catch (error: any) {
    console.error('Error fetching recipes: ', error);
    res.status(500).json({ message: error.message }); // Handle errors
  }
});
 


export { router as spoonacularRouter }; // Export the router


