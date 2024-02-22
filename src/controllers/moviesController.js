const getMoviesByYear = (req, res) => {
 
    // Add logic to fetch movies based on the year (service layer logic)
    // For now, we'll just send a dummy response
    res.json({ message: 'Movies fetched successfully',});
  };
  
  module.exports = { getMoviesByYear };