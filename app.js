const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Sample in-memory data store
let volunteers = [];

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
const volunteerRoutes = require('./routes/volunteers')(volunteers);
app.use('/', volunteerRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
