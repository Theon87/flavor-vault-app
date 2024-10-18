// import routes
import express from 'express';
const router = express.Router();
router.use('/login', loginRouter);
router.use('/my-recipes', myRecipesRouter);
export default router;
