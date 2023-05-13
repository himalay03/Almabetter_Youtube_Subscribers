const express = require("express");
const app = express();

// Schema
const schema = require("./models/subscribers.js");

// Parse incoming Json data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Home Page
app.get("/", (req, res) => {
  res.send(
    `........This is the home page of Youtube Subscribers backend project created by Himalaya Sundi....
    ....[GET('/subscribers') to get details of all subscribers.]...
    .....[GET('/subscribers/names') to get only names and subscribedchannel details of all subscribers.] ....
    ....[GET('/subscribers/:_id') to get details of an individual subscriber by ID.] `
  );
});

// This route shows all subscribers list with details
app.get("/subscribers", (req, res) => {
  schema
    .find()
    .then((subscribers) => {
      res.send(subscribers);
    })
    .catch((error) => {
      res.status(404).send(error);
    });
});

// This route only shows name and subscribedChannel of individuals
app.get("/subscribers/names", (req, res) => {
  schema
    .find()
    .select({
      name: 1,
      subscribedChannel: 1,
      _id: 0,
    })
    .then((subscriber) => {
      res.send(subscriber);
    })
    .catch((error) => {
      res.status(404).send(error);
    });
});

// This route shows the details of a particular person with the help of Id
app.get("/subscribers/:_id", (req, res) => {
  const subscriberId = req.params._id;
  // Get the value of the id parameter from the request URL

  schema
    .findById(subscriberId)
    .then((subsId) => {
      res.json(subsId);
    })
    .catch((error) => {
      res.status(404).send({ message: error.message }, error);
    });
});

module.exports = app;
