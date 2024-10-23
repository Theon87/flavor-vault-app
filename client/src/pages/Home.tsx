
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../index.css';
import SearchBar from '../components/SearchBar';
import RecipeCard from '../components/RecipeCard';
import auth from '../utils/auth';
import Login from './Login';
import { useState, useEffect } from 'react';


const Home = () => {
    const [loginCheck, setLoginCheck] = useState(false);

    const checkLogin = () => {
        if (auth.loggedIn()) {
          setLoginCheck(true);  // Set loginCheck to true if user is logged in
        }
      };

    useEffect(() => {
        checkLogin();
    }, [loginCheck]);


    return (
        <>
            {!loginCheck ? (
                <div>
                    <h1>Welcome to Flavor Vault!</h1>
                    <Login />
                </div>
            ) : (
                <div>
                <Navigation />
                <Header />
                <SearchBar />
                <RecipeCard />
                <Footer />
                </div>
            )
            }
        </>        
    )
};

export default Home;