// // import routes
import express from 'express';
import { myRecipesRouter } from './my-recipes-routes.js';
import { userRouter } from './user-route.js';
import { spoonacularRouter } from './spoonacularRoutes.js;'
import { groceryListRouter } from './grocery-list-routes.js';


const router = express.Router();

router.use('/recipes', myRecipesRouter);
router.use('/users', userRouter);
router.use('/spoonacular', spoonacularRouter)

router.use('/grocery-list', groceryListRouter);


export default router;
