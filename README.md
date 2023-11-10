# Todo Application

## About this application

This is a simple todo application where you can add, edit or delete your to-do tasks. This is application has 2 parts. One is this Node.js application which uses PostgreSQL as its DB and the other is a React.js fronted application.
This Nodejs application can also be used for testing the APIs as a standalone application with the help of Postman, without the need of the frontend application.

## Pre-requisites

1. Download and install postgreSQL in your system and set it up according to the postgres documentation.
2. Download and install Postman to test the APIs.

## Getting Started

1. Clone this repository in your local machine.
2. Open the project in your IDE (eg: VS Code).
3. After setting up the postgres DB, open command prompt and log into your DB and run the 2 queries present in `database.sql` file to create a database and a table respectively.
4. Now, come back to the application and set up your postgres config in the `db.js` file.
5. Run `npm install` to install all the necessary packages.
6. Run `npm start` to run the application.
