const functions = require("firebase-functions");
const app = require("express")();
const { getAllScreams, postOneScream } = require("./handlers/screams");
const { signup, login } = require("./handlers/users");
const FBAuth = require("./util/fbAuth");

//users Routes - handlers/user
app.post("/signup", signup);
app.post("/login", login);

// Scream Routes - handlers/screams
app.get("/screams", getAllScreams);
app.post("/scream", FBAuth, postOneScream);

exports.api = functions.https.onRequest(app);
