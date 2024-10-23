import express from "express";
import type { Request, Response } from "express";
import axios from "axios";
import * as dotenv from "dotenv";
// import { Recipe } from "../../model"; // Optional: Use if saving recipes locally

dotenv.config();

const router = express.Router();
const SPOONACULAR_API_URL = "https://api.spoonacular.com/recipes/complexSearch";
const SPOONACULAR_INFO_URL = "https://api.spoonacular.com/recipes";
const API_KEY = process.env.SPOONACULAR_API_KEY;

// GET /api/recipes - Fetch recipes and detailed information
router.get("/recipes", async (_req: Request, res: Response) => {
  try {
    // Step 1: Get a list of recipes from Spoonacular
    const searchResponse = await axios.get(SPOONACULAR_API_URL, {
      params: { apiKey: API_KEY, number: 5 }, // Fetch 5 recipes
    });

    const recipes = searchResponse.data.results;

    // Step 2: Fetch detailed info for each recipe using its ID
    const detailedRecipes = await Promise.all(
      recipes.map(async (recipe: any) => {
        const infoResponse = await axios.get(
          `${SPOONACULAR_INFO_URL}/${recipe.id}/information`,
          { params: { apiKey: API_KEY } }
        );
        return infoResponse.data; // Return detailed info
      })
    );

    console.log("GET /recipes");
    res.json(detailedRecipes); // Send detailed recipes to frontend
  } catch (error: any) {
    console.error("Error fetching recipes: ", error);
    res.status(500).json({ message: error.message });
  }
});

export { router as spoonacularRouter };
