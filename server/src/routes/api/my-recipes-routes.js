import express from 'express';
// import { Recipie } from '../../models/index.js';
const router = express.Router();
// GET api/recipes - Get all recipies
router.get('/', async (_req, res) => {
    try {
        // const recipies = await Recipe.findAll();
        // res.json(recipies);
        console.log('GET /recipes');
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
export { router as myRecipesRouterRouter };
