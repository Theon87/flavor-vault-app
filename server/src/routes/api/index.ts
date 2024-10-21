// // import routes

import express from 'express';
import { myRecipesRouter } from './my-recipes-routes.js';
import { User } from '../../model/user.js';

const router = express.Router();

// // router.use('/login', loginRouter);
router.use('/recipes', myRecipesRouter);
router.use('/User', userRouter);

export default router;
