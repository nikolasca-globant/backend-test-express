const validateYear = (req, res, next) => {
    const { year } = req.query;
  
    if (!year) {
      return res.status(400).json({ error: 'Year parameter is required' });
    }
  
    const parsedYear = parseInt(year, 10);
    if (isNaN(parsedYear) || parsedYear < 1900 || parsedYear > new Date().getFullYear()) {
      return res.status(400).json({ error: 'Invalid year parameter' });
    }
  
    next();
  };
  
  module.exports = validateYear;