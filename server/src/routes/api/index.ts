// // import routes
import express from 'express';
import { myRecipesRouter } from './my-recipes-routes.js';
import { userRouter } from './user-route.js';

const router = express.Router();

// // router.use('/login', loginRouter);
router.use('/recipes', myRecipesRouter);
router.use('/users', userRouter);

export default router;
