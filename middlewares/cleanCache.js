const { clearHash } = require('../services/cache');

// Didnt work
module.exports = async (req, res, next) => {
  // Makes it so that the route handler runs before the rest of this middleware
  await next();

  clearHash(req.user.id);
};
