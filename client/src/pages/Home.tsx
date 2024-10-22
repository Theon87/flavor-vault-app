
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../index.css';
import SearchBar from '../components/SearchBar';
import RecipeCard from '../components/RecipeCard';


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