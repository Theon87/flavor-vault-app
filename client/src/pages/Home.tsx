
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../index.css';
import SearchBar from '../components/SearchBar';
import RecipeCard from '../components/RecipeCard';
import auth from '../utils/auth';


const Home = () => {
    const [loginCheck, setLoginCheck] = useState(false);

    const checkLogin = () => {
        if (auth.loggedIn()) {
          setLoginCheck(true);  // Set loginCheck to true if user is logged in
        }
      };

    useEffect(() => {
        checkLogin();
    }, []);


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