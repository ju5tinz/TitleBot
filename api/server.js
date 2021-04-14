const express = require('express');
const http = require('http');
const fetch = require('node-fetch')

const app = express();

/* EXPESS CONFIG */
app.use(express.json());

/* ROUTE CONFIG */
app.post('/title', async (req, res) => {
  const url = req.body.url;
  try {
    const title = getTitle(url);
    res.send(title);
  } catch (err) {
    console.log("Error getting title: ", err);

  }
});

/* SETUP HTTP SERVER */
var port = process.env.PORT || 5000;
app.set('port', port);

var server = http.createServer(app);

server.listen(port);

function getTitle(url) {
  try{
    const data = await fetch(url);
    const html = data.text();
    console.log("html: ", html);
  } catch (err) {
    console.log("Unable to fetch url: ", url);
  }
}