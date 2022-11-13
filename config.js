var admin = require("firebase-admin");

var serviceAccount = require("./proposal-pad-firebase-adminsdk-fkvj5-80efb96820.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
module.exports = admin;
