# 1.E-Commerce
# E-Commerce App
This is a basic e-commerce web application built using React, Express, and MongoDB.

## Prerequisites
Before running this project, ensure you have installed Node.js and npm. You will also need to set up a MongoDB Atlas account and obtain your MongoDB URI.

## Node Modules Required
Make sure the following npm modules are installed in your project:

bash
Copy code
npm install express mongoose cors body-parser
MongoDB Setup
MongoDB Atlas Account:

### Create a MongoDB Atlas account at MongoDB Atlas.
Create a new cluster and set up your database.
Connect your Application:

### Obtain your MongoDB URI from MongoDB Atlas.
Replace <your-mongo-uri> in backend/server.js with your MongoDB URI.
Running the Application
You need to run both the frontend and backend servers concurrently.

### Frontend
Navigate to the frontend directory and run:

bash
Copy code
npm install   # Install dependencies
npm start     # Run the frontend server on http://localhost:3000
Backend
Navigate to the backend directory and run:

bash
Copy code
npm install   # Install dependencies
npm start     # Run the backend server on http://localhost:5000
Notes
The frontend runs on http://localhost:3000 and the backend runs on http://localhost:5000.
Ensure MongoDB is running and your MongoDB URI is correctly set in backend/server.js.
This README provides a basic setup guide. Feel free to customize and expand it based on your project's specific requirements and features.

