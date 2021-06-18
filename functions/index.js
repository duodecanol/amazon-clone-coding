/* eslint-disable */

require("dotenv").config();
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")(process.env.API_SECRET_KEY);

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin:true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('HELLO WORLD'))
app.get('/qazi', (request, response) => response.status(200).send('Whats up Qazi'))

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  console.log('Payment Request Received BOOOOOOM!!!! for this amount >>> ', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  // OK - created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen commands
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://localhost:5001/clone-coding-5e9d8/us-central1/api