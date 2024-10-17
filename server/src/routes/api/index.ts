// import routes

import express from 'express';

const router = express.Router();

router.use('/login', loginRouter);

export default router;
