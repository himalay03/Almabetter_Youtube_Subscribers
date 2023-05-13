# Almabetter_Youtube_Subscribers
A backend project on Youtube-Subscribers using ExpressJs, MongoDb, and NodeJs.

## Deployment
Link to visit Youtube Subscriber video:
https://youtu.be/TT6xmYqPTKQ

Web Deployed Link:
https://wild-plum-chick-gear.cyclic.app/

## Clone the project
### git clone
https://github.com/himalay03/Almabetter_Youtube_Subscribers.git

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
1. [src/app.js]  is used to handle requests and responses.
2. [src/createDatabase.js]  for database creation on MongoDB.
3. [src/data.js]  for data that have to be connected to a database.
4. [src/index.js]  is used to connect and start the server.
5. [src/models/subscriber.js]  for the schema.


## Tech Stack
ExpressJs,
MongoDB,
Mongoose,
NodeJs

## 🛠 Skills
Javascript

## Project Created By
Himalaya Sundi
