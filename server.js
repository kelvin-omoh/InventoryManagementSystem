const express = require('express');
const request = require('request');
const cors = require('cors');
const app = express();
app.use(cors());

// Middleware to parse the request body
app.use(express.json());

app.post('/send-sms', (req, res) => {
  const receivedData = req.body;

  // Define the options object outside of the if-else block
  const options = {
    method: 'POST',
    url: 'https://api.sendchamp.com/api/v1/sms/send',
    headers: {
      Accept: 'application/json,text/plain,*/*',
      'Content-Type': 'application/json',
      Authorization: 'Bearer sendchamp_live_$2a$10$qhRrcy3qq6fuwcZaOhg6yuqn7SadgRLfxPiUcnlnWrvaCSQUUAxoa'
    },
    body: null, // We will set this later based on the condition
  };

  if (receivedData.Productmessage === "(4 days before expiration)") {
    options.body = JSON.stringify({
      to: ['2349073597660'], // The recipient numbers
      message: 'EXPIRATION WARNING ' + receivedData.Productmessage + ': Your product ' + receivedData.ProductName + receivedData.ProductMetaData + receivedData.ProductDate + '. Please remove it from the inventory on time. Strict Order from the Management. Failure to comply after 3 working days would lead to penalties.',
      sender_name: 'Enaikele',
      route: 'dnd',
    });
  } else {
    options.body = JSON.stringify({
      to: ['2349073597660','2348186151624','2348057927948'], // The recipient numbers
      message: 'EXPIRATION WARNING: Your product ' + receivedData.ProductName + ' is expiring on ' + receivedData.ProductDate + '. Please remove it from the inventory on time. Strict Order from the Management. Failure to comply after 3 working days would lead to penalties.',
      sender_name: 'Enaikele',
      route: 'dnd',
    });
  }

  request(options, function (error, response, body) {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to send SMS' });
    } else {
      console.log('SMS sent successfully');
      res.json({ message: 'SMS sent successfully' });
    }
  });
});

app.listen(3001, () => {
  console.log('Backend server running on port 3001');
});
