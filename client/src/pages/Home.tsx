
import { useState, useEffect, useLayoutEffect } from "react";
import { retrieveUsers } from "../api/userAPI";
import type { UserData } from "../interfaces/userData";
import auth from "../utils/auth";
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../index.css';
import SearchBar from '../components/SearchBar';
import RecipeCard from '../components/RecipeCard';
import ErrorPage from './ErrorPage';


const Home = () => {
    const [users, setUsers] = useState<UserData[]>([]);
    const [error, setError] = useState(false);
    const [loginCheck, setLoginCheck] = useState(false);

    useEffect(() => {
        if (loginCheck) {
            fetchUsers();
        }
    }, [loginCheck]);

    useLayoutEffect(() => {
        checkLogin();
    }, []);

    const checkLogin = () => {
        if (auth.loggedIn()) {
            setLoginCheck(true);
        }
    };

    const fetchUsers = async () => {
        try {
            const data = await retrieveUsers();
            setUsers(data)
        } catch (err) {
            console.error('Failed to retrieve users:', err);
            setError(true);
        }
    }

    if (error) {
        return <ErrorPage />;
    }
    return (
        <div>
            {
                !loginCheck ? (
                    <div>
                        <h1>Please login to view recipes</h1>
                    </div>
                ) : (
                    <div>
                        <Navigation />
                        <Header />
                        <SearchBar />
                        <RecipeCard />
                        <Footer />
                    </div>
                        
                )}
        </div>
            
    )
};

export default Home;