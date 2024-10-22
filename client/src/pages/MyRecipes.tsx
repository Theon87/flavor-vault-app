import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import { Button } from "@material-tailwind/react";

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
      <Navigation />
      <div>
        <main>
          <div className="overlay">
            <div className="container px-5 py-24 mx-auto text-black">
              <p className="text-center mb-5 text-md-">
                Discover amazing recipes and learn how to make them. If you like
                a recipe, just add it to your favorites!
              </p>

              <div className="w-full lg:w-2/3 mx-auto">
                <form
                  onSubmit={handleSubmit}
                  className="flex border-2 border-green-600 rounded-full px-4 py-2 text-lg"
                >
                  <input
                    type="text"
                    className=" w-full bg-transparent outline-none search-bar"
                    placeholder="Search Recipe..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    required
                  />
                  <Button className="flex w-max gap-4" variant="filled">
                    Search
                  </Button>
                </form>
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
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default MyRecipes;
