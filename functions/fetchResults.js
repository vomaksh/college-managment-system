const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  axios.get("https://outcome-ipu.herokuapp.com/find/" + req.query.rollNumber).then(response => {
    console.log("In then block");
    return res.send(response.data)
  }).catch(error => {
    console.log("In catch block");
    console.log(error);
    return res.send({error});
  })
})

module.exports = app;