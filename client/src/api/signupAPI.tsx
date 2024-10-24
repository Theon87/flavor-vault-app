import { newUser } from "../interfaces/newUser";

// Function to send a POST request to the '/signup' endpoint with user information
const signup = async (userInfo: newUser) => {
    try {
      // Send a POST request to '/signup' with user information in JSON format
      const response = await fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo)
      });
  
      // Throw error if response status is not OK (200-299)
      if (!response.ok) {
        const errorData = await response.json(); // Parse error response as JSON
        throw new Error(`Error: ${errorData.message}`); // Throw a detailed error message    
      }
  
      // Parse the response body as JSON
      const data = await response.json();
  
      return data;  // Return the data received from the server

    } catch (err) {
      console.log('Error from user signup: ', err);  // Log any errors that occur during fetch
      return Promise.reject('Could not signup new user');  // Return a rejected promise with an error message
    }
  }
  
  export { signup };  // Export the signup function to be used elsewhere in the application
  