// // import routes

import express from 'express';
import { myRecipesRouter } from './my-recipes-routes.js';
import { groceryListRouter } from './grocery-list-routes';

const router = express.Router();

// // router.use('/login', loginRouter);
router.use('/recipes', myRecipesRouter);

export default router;
