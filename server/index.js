const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
const config = require('./config');
const http = require('http');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.get('/', function (req, res) {
  axios.get('http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en')
    .then(response => {
      res.send(response.data);
    }, error => {
      console.log(error);
    });
});

http.createServer(app).listen(config.port, function () {
  process.send && process.send("ready");
  console.log('Server started on ' + config.port + ' port');
});
