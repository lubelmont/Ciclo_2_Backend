
const validateAppIdentifier = (req, res, next) => {
  const appIdentifier = req.headers['x-app-id'];
  if (!appIdentifier || appIdentifier !== process.env.APP_IDENTIFIER) {
    return res.status(403).json({ error: 'Forbidden' });
  }
  next();
};

const validateApiKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(403).json({ error: 'Forbidden' });
  }
  
  const userAgent = req.headers['user-agent'] || 'Unknown';
  req.appInfo = { userAgent };

  next();
};

module.exports = {
  validateAppIdentifier,
  validateApiKey
};