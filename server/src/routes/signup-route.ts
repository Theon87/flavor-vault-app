import { Router, Request, Response } from 'express';
import { User } from '../model/user.js';  // Import the User model
import jwt from 'jsonwebtoken';  // Import the JSON Web Token library


// Login function to authenticate a user

export const login = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;  // Extract username and password from request body

  try {
    // Create the user in the database
    const user = await User.create({ username, email, password });

    // If the user is created successfully, send a 201 response
    return res.status(201).json(user);
  
    } catch (error) {
    console.log(error);
    }

    // Get the secret key from environment variables
    const secretKey = process.env.JWT_SECRET_KEY || '';

    // Generate a JWT token for the authenticated user
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
  
    return res.json({ token });  // Send the token as a JSON response  

};

// Create a new router instance
const router = Router();

// POST /login - Login a user
router.post('/signup', login);  // Define the login route

export default router;  // Export the router instance

