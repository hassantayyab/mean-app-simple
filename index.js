const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const route = require('./routes/route');

const app = express();

// specify port no
const port = 3000;

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
  .connect(db, {useNewUrlParser: true})
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// adding middleware
app.use(cors());

// Bodyparser Middleware
app.use(bodyParser.json());

// Use Routes
app.use('/api', route);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Hello');
})

app.listen(port, () => {
  console.log('Server started at port:', port);
})