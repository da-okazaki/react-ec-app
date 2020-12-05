'use strict';
//==============================
// Package
//==============================
const functions = require('firebase-functions');


//==============================
// Cloud Functions Handler
//==============================
exports.handler = functions.https.onRequest((request, response) => {

  functions.logger.info("Hello logs!", {structuredData: true});

  response.send("Hello from Firebase!");
});

//==============================
// Function
//==============================
