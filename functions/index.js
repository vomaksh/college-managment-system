const functions = require('firebase-functions');
const axios = require("axios");
const express = require('express');
const cors = require('cors');
const sendNotificationHandler = require("./sendNotificationHandler");
const fetchResults = require("./fetchResults");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'key=AAAAJXc_opg:APA91bGNv_tbH593BtZ6iaY5EBUB4QscZB1sPWKJR7DiwVXonWCkVesyvaN_gk-UVw8exC0x2DpUYRqVmwim7z0kXTyk6zrbP2XmYYM0SLn4dn6jfTOAmf4aqCYl2_S0rcjWiKL6t1x2',
    'project_id': '160914449048'
  };
  let data = {
    "operation": "add",
    "notification_key_name": "ece",
    "notification_key": "APA91bH5c0rlj8UBEOWB-VeJnqeqMFKvldY-ls_hjv1KaDBTUi1l5l-AxUfyd5t-6AroBTsDnhpzzX0SmYGVflrtWazHoQwZScxbTlJT-OhTemV9OBeTk3M",
    "registration_ids": [req.query.token]
  };
  axios.post("https://fcm.googleapis.com/fcm/notification", data, {headers}).then(response => {
    res.send("Added you to notification system");
  }).catch(error => {
    res.send(error);
  })
})

exports.helloWorld = functions.https.onRequest(app);

exports.sendNotifications = functions.https.onRequest(sendNotificationHandler);

exports.fetchResults = functions.https.onRequest(fetchResults);

