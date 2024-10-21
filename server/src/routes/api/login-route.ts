// DEPENDENCIES 
import express, { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Login route
router.post('/login', async (req: Request, res: Response) => {
    const { username, password } = req.body;
  