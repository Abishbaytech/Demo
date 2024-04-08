const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./Config/Config');
const authenticateToken = require('./Utils/Utils-index');
const userRouter = require('./Routes/Api/User-Api')
require('dotenv').config();


const app = express();
app.use(bodyParser.json());

app.use('/users', authenticateToken, userRouter);



sequelize
  .sync()
  .then(() => {
    const PORT = process.env.PORT;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
