//app/client/src/pages/home.tsx
//This willl be our home page
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Optional: Import CSS for styling
//We will need a header, a nav bar containg home, login, and my recipes.

//We will need a search bar to search for recipes on the page.

// Once we have the search bar we will need to display the recipes that match the search pulled from our api.

// When the user clicks on a recipe we will need to display the recipe details on a seperate page (recipe.tsx).

// Finally we'll need the footer
const Home: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
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
    return (
        <div>
            <header> 
                <h1>Flavor Vault</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/my-recipes">My Recipes</Link></li>
                    </ul>
                </nav>
            </header>

            <main>
            <h2>Welcome to Flavor Vault!</h2>
            <p>Discover and share amazing recipes.</p>
            </main>
            <footer>
            <p>&copy; 2024 My Recipe App</p>
            </footer>
        </div>
    );
};
export default Home;