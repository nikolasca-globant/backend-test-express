const express = require('express');
const moviesRoutes = require('./src/routes/moviesRoutes');
const errorMiddleware = require('./src/middleware/errorMiddleware');

const app = express();

app.use(express.json());

app.use('/movies', moviesRoutes);

//error middleware
app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});