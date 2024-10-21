// DEPENDENCIES 
import express, { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Login route
router.post('/login', async (req: Request, res: Response) => {
    const { username, password } = req.body;
      // Find the user by username
  const user = users.find(u => u.username === username);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
 // Check if password matches
 const isMatch = await bcrypt.compare(password, user.password);
 if (!isMatch) {
   return res.status(401).json({ message: 'Invalid credentials' });
 }
  // Create JWT token
  const token = jwt.sign({ id: user.id, username: user.username }, 'your_jwt_secret', { expiresIn: '1h' });

  return res.json({ token });
});

export default router;