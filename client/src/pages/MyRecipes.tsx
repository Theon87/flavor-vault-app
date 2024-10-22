import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Define a Recipe interface
interface Recipe {
  id: number;
  title: string;
  description: string;
}

const MyRecipes = () => {
  const [searchTerm, setSearchTerm] = useState(""); // user's search input.
  const [recipes, setRecipes] = useState<Recipe[]>([]); //recipes array to store all the fetched recipes from the API.
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]); //filteredRecipes: An array to store recipes that match the search term. Initially, it can be set to an empty array.
  //The useState hook initializes these pieces of state.
  // Fetch recipes from API
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("/api/recipes"); // Update with correct API endpoint
        const data = await response.json();
        setRecipes(data);
        setFilteredRecipes(data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);
  // Handle search input
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);

    // Filter recipes based on search term
    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredRecipes(filtered);
  };

  return (
    <div>
      <main>
        <input
          type="text"
          placeholder="Search for recipes..."
          value={searchTerm}
          onChange={handleSearch}
        />

        <div className="recipe-list">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <div key={recipe.id} className="recipe-item">
                <Link to={`/my-recipe/${recipe.id}`}>
                  <h3>{recipe.title}</h3>
                  <p>{recipe.description}</p>
                </Link>
              </div>
            ))
          ) : (
            <p>No recipes found.</p>
          )}
        </div>
      </main>
    </div>
  );
};
export default MyRecipes;
