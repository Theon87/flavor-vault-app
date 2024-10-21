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
    return (
        <div>
            <header>
                <h1>Flavor Vault</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li></li>
                        <li></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}