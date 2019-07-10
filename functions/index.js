const functions = require("firebase-functions");
const app = require("express")();
const {
  getAllScreams,
  postOneScream,
  getScream
} = require("./handlers/screams");
const {
  signup,
  login,
  uploadImage,
  addUserDetails,
  getAuthenticatedUser
} = require("./handlers/users");
const FBAuth = require("./util/fbAuth");

//users Routes - handlers/user
app.post("/signup", signup);
app.post("/login", login);
app.get("/scream/:screamId", getScream);
// TODO delete scream, Like a scream, unlike a scream, comment on scream

// Scream Routes - handlers/screams
app.get("/screams", getAllScreams);
app.post("/scream", FBAuth, postOneScream);
app.post("/user/image", FBAuth, uploadImage);
app.post("/user", FBAuth, addUserDetails);
app.get("/user", FBAuth, getAuthenticatedUser);

exports.api = functions.https.onRequest(app);
