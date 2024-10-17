import express from 'express';
import type { Request, Response } from 'express';
// import { Recipie } from '../../models/index.js';

const router = express.Router();

// GET api/recipes - Get all recipies
router.get('/', async (_req: Request, res: Response) => {
  try {
    // const recipies = await Recipe.findAll();
    // res.json(recipies);
    console.log('GET /recipes');
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export { router as myRecipesRouterRouter };
