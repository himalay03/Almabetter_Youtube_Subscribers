# Almabetter_Youtube_Subscribers
A backend project on Youtube-Subscribers using ExpressJs, MongoDb, and NodeJs.

## Deployment
Link to visit Youtube Subscriber video.
https://www.youtube.com/watch?v=vVFROxt5mms&t=119s

## Clone the project
### git clone
https://github.com/himalay03/flashcard-generator.git

### Install dependencies
npm install

### Start the server
nodemon src/index.js

## About The App
The project is an Express.js application that interacts with a MongoDB database. Its purpose is to retrieve information about YouTube subscribers from the MongoDB database. The subscribers' data consists of fields such as id, name, subscribed channel, and subscribed date.

The project includes three GET routes, each serving a specific purpose:

GET /subscribers: This route retrieves all subscribers' information from the MongoDB collection. It uses Mongoose's find() method to retrieve all documents from the subscribers collection and sends the retrieved data as a response.

GET /subscribers/:_id: This route retrieves a specific subscriber's information based on the provided _id parameter. The _id corresponds to the unique identifier of a subscriber in the MongoDB collection. It uses Mongoose's findById() method to query the collection for a document with the specified _id and sends the retrieved data as a response.

GET /subscribers/name: This route retrieves subscribers' information based on name and subscribed channel. It uses Mongoose's find() method with a query parameter to filter the collection based on the sname and subscribed channel and sends the retrieved data as a response.

## Project Folder Structure
1. index.js used to connect and start server.
2. app.js used to handle request and response.
3. Run  (node src/createDatabase.js) to create Database on local storage.  

## Tech Stack
ExpressJs,
MongoDB,
Mongoose,
NodeJs

## 🛠 Skills
Javascript

## Project Created By
Himalaya Sundi
