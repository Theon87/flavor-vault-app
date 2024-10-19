import express from 'express';
import type { Request, Response } from 'express';
import { Recipe } from '../../model/index.js';

const router = express.Router();

// GET api/recipes - Get all recipies
router.get('/', async (_req: Request, res: Response) => {
  try {

    const recipes = await Recipe.findAll();
    res.json(recipes);

    console.log('GET /recipes');
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export { router as myRecipesRouter };
