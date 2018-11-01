const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'key=AAAAJXc_opg:APA91bGNv_tbH593BtZ6iaY5EBUB4QscZB1sPWKJR7DiwVXonWCkVesyvaN_gk-UVw8exC0x2DpUYRqVmwim7z0kXTyk6zrbP2XmYYM0SLn4dn6jfTOAmf4aqCYl2_S0rcjWiKL6t1x2'
  };
  let data = {
    "to": "APA91bH5c0rlj8UBEOWB-VeJnqeqMFKvldY-ls_hjv1KaDBTUi1l5l-AxUfyd5t-6AroBTsDnhpzzX0SmYGVflrtWazHoQwZScxbTlJT-OhTemV9OBeTk3M",
    "notification": {
      "title": req.query.title,
      "body": req.query.body
     }
  };
  axios.post("https://fcm.googleapis.com/fcm/send", data, {headers}).then(response => {
    res.send("Notification sent successfully");
  }).catch(error => {
    console.log(error.message)
    res.send(error.message);
  })
});

module.exports = app;