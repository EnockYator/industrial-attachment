// importing modules
import express from 'express';
import mongoose from 'mongoose'
import bodyParser from 'body-parser';

const app = express();

// middleware
app.use(bodyParser.json())

// routes
//app.use('/api', import('../routes'))

// Connecting to MongoDB
mongoose.connect('mongodb://localhost/nuxt-express')

//handling CORS requests
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

const port = process.env.PORT || 5000;
// starting server
app.listen(port, (err) => {
    if (err) {
      console.log("Failed to start the sever", err);
      return;
    }
    console.log(`\nConnected to backend server at port ${port}`);
    console.log(`Server is running on http://localhost:${port}`);
  });

  /************exports*************** */
// Exporting express app instance
export default app;

// Exporting object with path and handler
export const apiConfig = {
  path: '/api',
  handler: app
};


