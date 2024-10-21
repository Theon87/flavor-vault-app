// This is the page where the user can view all of their saved recipes.

// We will need a header, a nav bar containing home, login, and my recipes.

// We will need to display the recipes that the user has saved.

// When the user clicks on a recipe we will need to display the recipe details.

// We will also need to have a button to delete a recipe from the users my recipes.

// Finally we'll need the footer

import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Define a Recipe interface
interface Recipe {
    id: number;
    title: string;
    description: string;
}

const myRecipes = () => {
    const [searchTerm, setSearchTerm] = useState(''); //searchTerm: A string to hold the user's search input.
    const [recipes, setRecipes] = useState<Recipe[]>([]); //recipes: An array to store all the fetched recipes from the API.
    const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]); //filteredRecipes: An array to store recipes that match the search term. Initially, it can be set to an empty array.
    //The useState hook initializes these pieces of state. 
    // Fetch recipes from API (replace with your API endpoint)
    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch('/api/recipes'); // Update with your API endpoint
                const data = await response.json();
                setRecipes(data);
                setFilteredRecipes(data);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };

        fetchRecipes();
    }, []);
    // Handle search input
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchTerm(value);

        // Filter recipes based on search term
        const filtered = recipes.filter(recipe =>
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
                        filteredRecipes.map(recipe => (
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
export default myRecipes;
