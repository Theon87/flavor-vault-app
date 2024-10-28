import { authenticateToken } from '../middleware/auth.js';
import apiRoutes from './api/index.js'
import authRoutes from './auth-routes.js'
import signupRoute from './signup-route.js'
import express from 'express';
const router = express.Router();

router.use('/api', authenticateToken, apiRoutes);
router.use('/auth', authRoutes);
router.use('/signup', signupRoute);

export default router;