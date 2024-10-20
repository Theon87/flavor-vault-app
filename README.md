# Flavor Vault App

# Description
Welcome to Flavor Vault, a powerful application designed to securely manage and explore your favorite recipes and grocery lists. Featuring a comprehensive and secure login system, Flavor Vault allows users to authenticate their accounts, create and manage personalized grocery lists, and streamline the process of meal planning and shopping. Whether you’re organizing ingredients for your next culinary adventure or managing daily shopping needs, Flavor Vault is crafted to enhance the efficiency of your cooking experience with ease and security.

# Table of Contents
Features
Technologies Used
Installation
Usage
API Endpoints
Folder Structure
License

# Features
Secure Login System: Users must log in to access their personal grocery lists.

JWT Authentication: JSON Web Tokens are used to authenticate and authorize users for secure access.

Grocery List Management: Users can create, view, update, and delete grocery list items.

Persistent Storage: All grocery list items are stored in a database and linked to individual users.

Token Expiry Handling: Automatic token expiry to protect user data and session management.

# Technologies Used
Backend: Node.js, Express.js

Frontend: React.js

Database: PostgreSQL

ORM: Sequelize

Authentication: JSON Web Tokens (JWT)

Environment Configuration: dotenv

# Installation

Prerequisites
Node.js: Ensure you have Node.js installed on your system.

PostgreSQL: A PostgreSQL instance for the database.

npm or Yarn: Package manager for dependency management.

# Usage

Once the app is running:
Navigate to http://localhost:3000 in your browser.

Sign up or log in to access your personal Flavor Vault.

Create, edit, or delete items from your grocery list.

Plan your cooking activities efficiently.

# Grocery List Actions:
Add Items: Add ingredients to your list with quantity and name.

Mark Items as Purchased: Mark off items when bought.

Edit Items: Update quantities and details of each grocery item.

Delete Items: Remove items from your grocery list.

# API Endpoints

Method	        Endpoint	                        Description	       
POST	        /auth/login	                        Login and receive a JWT	
POST	        /auth/signup	                    Register a new user	No
GET	            /grocery-list	                    Retrieve all grocery list items	
POST	        /grocery-list/add	                Add a new grocery item	
PUT	            /grocery-list/update/:id	        Update quantity of a grocery item	
PUT         	/grocery-list/mark-purchased/:id	Mark item as purchased
DELETE	        /grocery-list/delete/:id	        Delete a grocery item	

# Folder Structure

flavor-vault-app/
├── client/                  # React Frontend
│   ├── public/
│   ├── src/
│       ├── components/      # Reusable UI components
│       ├── pages/           # Page components
│       ├── api/             # API requests to the server
├── server/                  # Express Backend
│   ├── config/              # Database and environment configurations
│   ├── controllers/         # Controller logic for API routes
│   ├── models/              # Sequelize models
│   ├── routes/              # Express routes (auth, grocery)
│   ├── middleware/          # Authentication middleware
│   ├── .env                 # Environment variables file
├── .gitignore
├── README.md

# Environment Variables

Variable	         Description
PORT	             Port the server will run on (e.g., 3001)
DB_URL	             URL of the PostgreSQL database
DB_NAME	             Name of the PostgreSQL database
DB_USER	             Username for the PostgreSQL database
DB_PASSWORD	         Password for the PostgreSQL database
JWT_SECRET	         Secret key for signing JWTs

# Future Enhancements

Enable user-generated recipes and sharing to boost community engagement and allow users to contribute their own culinary creations.

Integrate grocery lists with online shopping platforms for seamless ordering of ingredients directly from the app.

Add nutrition tracking and meal planning tools to help users maintain their dietary goals while using the app.

Incorporate voice command features for hands-free interaction, enhancing convenience during cooking.

Implement advanced filtering options and personalized recipe suggestions based on user preferences and available ingredients.

# License

This project is licensed under the MIT License.

