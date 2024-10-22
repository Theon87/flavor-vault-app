import express from 'express';
import type { Request, Response } from 'express';
import { Recipe } from '../../model/index.js';

const router = express.Router();

// GET api/recipes - Get all recipies
router.get('/', async (_req: Request, res: Response) => {
  try {
    const recipes = await Recipe.findAll();
    console.log(`GET /recipes`);
    res.json(recipes);

  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

//GET api/recipes/:id - Retrieve a recipe by id
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    //find recipe by pk (id)
    const recipe = await Recipe.findByPk(id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found'});
    }
    console.log(`GET /recipes/${id} - Recipe Retrieved`, recipe);
    return res.json(recipe);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
});


// POST /api/recipes - Create a new recipe
router.post('/', async (req: Request, res: Response) => {
  const { name, prepTime, ingredients, instructions, userId } = req.body;
  try {
    const newRecipe = await Recipe.create({ name, prepTime, ingredients, instructions, userId });
       console.log(`POST /recipes - New Recipe Created: `, newRecipe);
       res.status(201).json(newRecipe);

  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

//PUT api/recipes/:id - update an existing recipe
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, prepTime, ingredients, instructions, userId } = req.body;

    const recipe = await Recipe.findByPk(id);
    if(!recipe) {
      return res.status(404).json({ message: 'Recipe not found. '});
    }
    await recipe.update({ name, prepTime, ingredients, instructions, userId });
    console.log(`PUT /recipes/:id - Recipe updated: `, recipe);
    return res.json(recipe);
  } catch(error: any) {
    return res.status(500).json({ message: error.message});
  }
});

//DELETE /api/recipes/:id - delete existing recipe
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const recipe = await Recipe.findByPk(id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    await recipe.destroy();
    console.log(`DELETE /recipes/:id - Recipe Deleted:`, recipe);
    return res.json({ message: 'Recipe deleted successfully' });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
});

export { router as myRecipesRouter };
