// // import routes

import express from 'express';
import { myRecipesRouter } from './my-recipes-routes.js';
import { groceryListRouter } from './grocery-list-routes';
import { authRoutes } from './auth-routes'; 

const router = express.Router();

// // router.use('/login', loginRouter);
router.use('/recipes', myRecipesRouter);
router.use('/grocery-list', groceryListRouter);

export default router;
