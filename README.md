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

