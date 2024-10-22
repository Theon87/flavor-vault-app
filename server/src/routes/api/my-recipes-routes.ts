import express from 'express';
import type { Request, Response } from 'express';
import { Recipe } from '../../model/index.js';

const router = express.Router();

// GET api/recipes - Get all recipies
router.get('/', async (_req: Request, res: Response) => {
  try {
    const recipes = await Recipe.findAll();
    console.log('GET /recipes');
    res.json(recipes);

  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});



// POST /api/recipes - Create a new recipe
router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, ingredients, instructions } = req.body;
    const newRecipe = await Recipe.create(
       { name, ingredients, instructions });
       console.log('POST /recipes - New Recipe Created: ', newRecipe);
       res.status(201).json(newRecipe);

  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export { router as myRecipesRouter };
