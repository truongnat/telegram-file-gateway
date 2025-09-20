require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const apiRoutes = require('./routes/api');
const logger = require('./middlewares/logger');
const errorHandler = require('./utils/errorHandler');
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(logger);

app.use('/api', apiRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});