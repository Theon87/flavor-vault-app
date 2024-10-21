// // import routes
import express from 'express';
import { myRecipesRouter } from './my-recipes-routes.js';
import { userRouter } from './user-route.js';

import { groceryListRouter } from './grocery-list-routes.js';
// import { login } from './auth-routes'; 


const router = express.Router();

// // router.use('/login', loginRouter);
router.use('/recipes', myRecipesRouter);
router.use('/users', userRouter);

router.use('/grocery-list', groceryListRouter);
// router.use('/auth', login);


export default router;
