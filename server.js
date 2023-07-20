const express = require('express');
const request = require('request');
const cors = require('cors');
const app = express();
app.use(cors());

// Middleware to parse the request body
app.use(express.json());


app.post('/send-sms', (req, res) => {
  const receivedData = req.body;
  // if(receivedData.Productmessage==="(4 days before expiration)"){

  //  const options = {
  //   method: 'POST',
  // url: 'https://api.sendchamp.com/api/v1/sms/send',
  // headers: {
  //   Accept: 'application/json,text/plain,*/*',
  //   'Content-Type': 'application/json',
  //   // Authorization: 'Bearer sendchamp_live_$2a$10$2vZoASNc06BVV/8mRz7JWuU6lWUOhEmBKMTOpHGALtQCBrwUfJ.sK'
  //   Authorization: 'Bearer sendchamp_live_$2a$10$H615IIhUp/nAvhw8DH7j.u4eIl3tQ7lEmxrTCKdVy9gk4guebwDdO'

  // },
  //   body: JSON.stringify({
  //     //,'2348060517580' john number
  //     to: ['2349073597660','2348186151624','2348057927948'],
  //     to: ['2349073597660'],
  //     message:  ' EXPIRATION WARNING '+receivedData.Productmessage+ ': Your product '+receivedData.ProductName + receivedData.ProductMetaData+receivedData.ProductDate+ ' . Please remove it from the inventory on time. Strict Order from the Management. Failure to comply after 3 working days would lead to penalities . ',
  //     sender_name: 'Enaikele',
  //     route: 'dnd',
  //   }), 
  // }

  const request = require('request');

const options = {
  method: 'POST',
  url: 'https://api.sendchamp.com/api/v1/sms/send',
  headers: {
    Accept: 'application/json,text/plain,*/*',
    'Content-Type': 'application/json',
    Authorization: 'Bearer sendchamp_live_$2a$10$H615IIhUp/nAvhw8DH7j.u4eIl3tQ7lEmxrTCKdVy9gk4guebwDdO'
  },
  form: {to: '2349073597660', message: 'hhh', sender_name: 'Ralph', route: 'dnd'}
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});


// }
//   else{
//  const options = {
//     method: 'POST',
//   url: 'https://api.sendchamp.com/api/v1/sms/send',
//   headers: {
//     Accept: 'application/json,text/plain,*/*',
//     'Content-Type': 'application/json',
//     Authorization: 'Bearer sendchamp_live_$2a$10$dIJlqpAgTXS2fJZJO25VeOXV/tBzmto6hm9OdePZe.BO207BuYaxG'
//   },
//     body: JSON.stringify({
//       //,'2348060517580' john number
//       to: ['2349073597660','2348186151624','2348057927948'],
//       // to: ['2349073597660'],
//       message: 'EXPIRATION WARNING : Your product '+receivedData.ProductName + ' is expiring  on the '+receivedData.ProductDate+ ' . Please remove it from the inventory on time . Strict Order from the Management. Failure to comply after 3 working days would lead to penalities . ',
//       sender_name: 'Enaikele',
//       route: 'dnd',
//     }), 
//   }

//   }


 
     
    
  

  request(options, function (error, response, body) {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to send SMS' });
    } else {
      // console.log(body);
      console.log( ' EXPIRATION WARNING '+receivedData.Productmessage+ ': Your product '+receivedData.ProductName + receivedData.ProductMetaData+receivedData.ProductDate+ ' . Please remove it from the inventory on time. Strict Order from the Management. Failure to comply after 3 working days would lead to penalities . ','SMS sent successfully' );
      res.json({ message: 'SMS sent successfully' });
      // console.log(message, 'SMS sent successfully');
    }
  });
});

app.listen(3001, () => {
  console.log('Backend server running on port 3001');
});