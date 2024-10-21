//app/client/src/pages/home.tsx
//This willl be our home page
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../index.css';
import SearchBar from '../components/SearchBar';

//We will need a header, a nav bar containg home, login, and my recipes.

//We will need a search bar to search for recipes on the page.

// Once we have the search bar we will need to display the recipes that match the search pulled from our api.

// When the user clicks on a recipe we will need to display the recipe details on a seperate page (recipe.tsx).

// Finally we'll need the footer

const Home = () => {
    return (
        <div>
            <Navigation />
            <Header />
            <Footer />
            <SearchBar />
        </div>
    )
};

// // Define a Recipe interface
// interface Recipe {
//     id: number;
//     title: string;
//     description: string;
// }
// const Home: React.FC = () => {
//     const [searchTerm, setSearchTerm] = useState(''); //searchTerm: A string to hold the user's search input.
//     const [recipes, setRecipes] = useState<Recipe[]>([]); //recipes: An array to store all the fetched recipes from the API.
//     const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]); //filteredRecipes: An array to store recipes that match the search term. Initially, it can be set to an empty array.
//     //The useState hook initializes these pieces of state. 
//     // Fetch recipes from API (replace with your API endpoint)
//      useEffect(() => {
//         const fetchRecipes = async () => {
//             try {
//                 const response = await fetch('/api/recipes'); // Update with your API endpoint
//                 const data = await response.json();
//                 setRecipes(data);
//                 setFilteredRecipes(data);
//             } catch (error) {
//                 console.error('Error fetching recipes:', error);
//             }
//         };

//         fetchRecipes();
//     }, []);
//      // Handle search input
//      const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
//         const value = event.target.value;
//         setSearchTerm(value);

//         // Filter recipes based on search term
//         const filtered = recipes.filter(recipe =>
//             recipe.title.toLowerCase().includes(value.toLowerCase())
//         );
//         setFilteredRecipes(filtered);
//     };
//     return (
//         <div>
//             <header> 
//                 <h1>Flavor Vault</h1>
//                 <nav>
//                     <ul>
//                         <li><Link to="/">Home</Link></li>
//                         <li><Link to="/login">Login</Link></li>
//                         <li><Link to="/my-recipes">My Recipes</Link></li>
//                     </ul>
//                 </nav>
//             </header>

//             <main>
//             <h2>Welcome to Flavor Vault!</h2>
//             <p>Discover and share amazing recipes.</p>
//             <input 
//                     type="text" 
//                     placeholder="Search for recipes..." 
//                     value={searchTerm}
//                     onChange={handleSearch} 
//                 />

//                 <div className="recipe-list">
//                     {filteredRecipes.length > 0 ? (
//                         filteredRecipes.map(recipe => (
//                             <div key={recipe.id} className="recipe-item">
//                                 <Link to={`/recipe/${recipe.id}`}>
//                                     <h3>{recipe.title}</h3>
//                                     <p>{recipe.description}</p>
//                                 </Link>
//                             </div>
//                         ))
//                     ) : (
//                         <p>No recipes found.</p>
//                     )}
//                 </div>
//             </main>
//             <footer>
//             <p>&copy; 2024 My Recipe App</p>
//             </footer>
//         </div>
//     );
// };
export default Home;