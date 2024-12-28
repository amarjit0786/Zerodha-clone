require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id) => {
  // Check if the secret key exists
  if (!process.env.TOKEN_KEY) {
    throw new Error("TOKEN_KEY is not defined in the environment variables");
  }

  return jwt.sign({ id }, process.env.TOKEN_KEY, {
    expiresIn: 3 * 24 * 60 * 60, // 3 days in seconds
  });
};
