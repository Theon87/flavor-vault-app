import { Router, Request, Response } from 'express';
import { User } from '../model/user.js';  // Import the User model
import jwt from 'jsonwebtoken';  // Import the JSON Web Token library
import bcrypt from 'bcrypt';  // Import the bcrypt library for password hashing

const router = Router();  // Initialize the router

// POST /login - Authenticate user and return JWT token
router.post('/login', async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;  // Extract username and password from request body

        // Check if both username and password are provided
        if (!username || !password) {
          return res.status(400).json({ message: 'Username and password are required' });
        }

 // Find the user in the database by username
 const user = await User.findOne({ where: { username } });

  // If user is not found, send an authentication failed response
  if (!user) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  // Compare the provided password with the stored hashed password
  const passwordIsValid = await bcrypt.compare(password, user.password);
  // If password is invalid, send an authentication failed response
  if (!passwordIsValid) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  // Get the secret key from environment variables
  const secretKey = process.env.JWT_SECRET_KEY || '';

    // Generate a JWT token for the authenticated user, valid for 1 hour
    const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' });

    // Send the JWT token to the client
    return res.status(200).json({ token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;  // Export the router instance
