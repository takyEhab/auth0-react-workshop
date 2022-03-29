/**
 * Required External Modules and Interfaces
 */
const express = require("express");
// const { getPublicMessage, getProtectedMessage } = require("./messages.service");
const { checkJwt } = require("../authz/check-jwt");
const { getUser } = require('./messages.middleware')

/**
 * Router Definition
 */

const messagesRouter = express.Router();
const User = require('./messages.models')
/**
 * Controller Definitions
 */

// GET messages/

messagesRouter.get("/public-message",async (req, res) => {
  // const message = getPublicMessage();
  // res.status(200).send({ message: 'public' });
  try {
    const users = await User.find();
    res.json({ message: JSON.stringify(users) })

  } catch (err) {
    res.status(500).json({ message: err.message })
  }
});

// messagesRouter.get('/', async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users)

//   } catch (err) {
//     res.status(500).json({ message: err.message })
//   }
// })

messagesRouter.get("/protected-message", checkJwt, getUser, (req, res) => {

  // const message = getProtectedMessage();
  // console.log(req.profile)
  res.status(200).send({ message: req.profile.sub });
});



module.exports = {
  messagesRouter,
};
