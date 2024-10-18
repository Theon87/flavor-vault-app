// import routes

import express from 'express';
import { myRecipesRouter } from './my-recipes-routes.js';

const router = express.Router();

// router.use('/login', loginRouter);
router.use('/my-recipes', myRecipesRouter);

export default router;
