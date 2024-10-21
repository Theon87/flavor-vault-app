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
import RecipeCard from '../components/RecipeCard';

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
            <SearchBar />
            <RecipeCard />
            <Footer />
        </div>
    )
};

export default Home;