// import { jwtDecode, JwtPayload} from 'jwt-decode';
// import { UserData } from '../interfaces/userData';

class AuthService {
    // Decode the JWT token and return the user data
    // getProfile() {
    //   return jwtDecode<UserData>(this.getToken());
    // }
  
    // Check if the user is logged in by retrieving the token from localStorage
    loggedIn() {
      const token = this.getToken();
      return token;
    }

    // isTokenExpired(token: string) {
    //   //checks if the token is expired and returns a boolean value
    //   const decoded = jwtDecode<JwtPayload>(token);
    //   if (decoded?.exp && decoded?.exp < Date.now() / 1000) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }
  
    // Retrieve the JWT token from localStorage
    getToken(): string {
      const loggedUser = localStorage.getItem('id_token') || '';
      return loggedUser;
    }
  
    // Store the JWT token in localStorage and redirect to the home page
    login(idToken: string) {
      localStorage.setItem('id_token', idToken);
      window.location.assign('/');
    }
  
    // Remove the JWT token from localStorage and redirect to the home page
    logout() {
      localStorage.removeItem('id_token');
      window.location.assign('/');
    }
  }
  
  // Export an instance of the AuthService class
  export default new AuthService();