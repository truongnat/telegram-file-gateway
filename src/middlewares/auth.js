module.exports = (req, res, next) => {
  // Đơn giản: xác thực qua header "x-api-key"
  const apiKey = req.headers['x-api-key'];
  if (!apiKey || apiKey !== 'demo-key') {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  next();
};