import { authenticateToken } from '../middleware/auth.js';
import apiRoutes from './api/index.js'
import authRoutes from './auth-routes.js'
import express from 'express';
const router = express.Router();

router.use('/api', authenticateToken, apiRoutes);
router.use('/auth', authRoutes);

export default router;