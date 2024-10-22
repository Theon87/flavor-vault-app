import { useState, useEffect} from "react";
import auth from "../utils/auth";
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../index.css';
import SearchBar from '../components/SearchBar';
import RecipeCard from '../components/RecipeCard';
import ErrorPage from './ErrorPage';
// import Login from './Login';

const Home = () => {
    const [error, setError] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkLogin = async () => {
            try {
                if (auth.loggedIn()) {
                    setIsLoggedIn(true);
                }
                setLoading(false);
            } catch (error) {
                console.error("Login check failed:", error);
                setError(true);
                setLoading(false);
            }
        };

        checkLogin();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <ErrorPage />;
    }

    if (!isLoggedIn) {
        return (
            <div>
                <h1>Please login to view recipes</h1>
            </div>
            
        );
    } 

    return (
        <div>
            <Navigation />
            <Header />
            <SearchBar />
            <RecipeCard />
            <Footer />
        </div>
    );
};

export default Home;