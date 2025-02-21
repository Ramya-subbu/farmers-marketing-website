const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
  name: String,
  mobileNumber: String,
  password: String,
  userType: String,
  addressLine1: String,
  addressLine2: String,
  city: String,
  state: String,
  pincode: String
});

const User = mongoose.model('User', userSchema);

app.post('/login', (req, res) => {
  const { mobileNumber, password } = req.body;
  User.findOne({ mobileNumber, password }, (err, user) => {
    if (err) {
      res.status(500).send({ message: 'Error logging in' });
    } else if (!user) {
      res.status(401).send({ message: 'Invalid mobile number or password' });
    } else {
      res.send({ message: 'Logged in successfully' });
    }
  });
});

app.post('/signup', (req, res) => {
  const { name, mobileNumber, password, userType, addressLine1, addressLine2, city, state, pincode } = req.body;
  const user = new User({ name, mobileNumber, password, userType, addressLine1, addressLine2, city, state, pincode });
  user.save((err) => {
    if (err) {
      res.status(500).send({ message: 'Error signing up' });
    } else {
      res.send({ message: 'Signed up successfully' });
    }
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
