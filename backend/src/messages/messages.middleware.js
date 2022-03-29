const axios = require('axios')
const { domain } = require('../config/env.dev');

const getUser = async (req, res, next) => {
  const token = req.headers.authorization
  try {
    const response = await axios.get(`https://${domain}/userinfo`, {
      headers: { Authorization: token }
    })

    req.profile = response.data

  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
  return next();
};

module.exports = { getUser }