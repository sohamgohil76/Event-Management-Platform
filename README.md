# Event-Management-Platform

# Overview
This Event Management Platform (EMP) is a basic application designed for an event-organizing company to manage events efficiently. It provides functionalities such as adding new events, updating existing events, deleting events, retrieving events by ID, and listing events with optional filters.

# Features
Add Event: Allows adding a new event with details such as event name, date, organizer information, location, etc.
Update Event: Allows updating existing event details.
Delete Event: Allows deleting an event by its unique ID.
Retrieve Event: Allows retrieving an event by its unique ID.
List Events: Allows listing all events with optional filters like date range, organizer name, etc

# Technology Stack
Node.js: Server-side JavaScript runtime environment.
Express: Web framework for Node.js to build APIs.
TypeScript: Superset of JavaScript that adds typing and other features.
MongoDB: NoSQL database for storing event data.
Mongoose: MongoDB object modeling tool for Node.js.

# Getting Started

## Prerequisites
Node.js and npm installed on your machine.
MongoDB Atlas account (or local MongoDB instance).

## Installation
1. Clone the repository from GitHub:
git clone <repository-url>
cd <project-folder>
2. Install dependencies:
npm install
3. Add your MongoDB URI
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>


# Running the Application

## Start the application:
npm start
--> This will start the server at http://localhost:5000

# Using the APIs
You can use tools like Postman to interact with the APIs.
Import the provided Postman collection (event-management.postman_collection.json) for sample requests and responses.

---

This README.md file provides a structured overview of your project, guiding users on how to set up and use the Event Management Platform, and also encourages contributions. Adjust the details (like MongoDB URI placeholders) to match your specific setup and preferences.
