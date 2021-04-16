const express = require('express');
const cors = require('cors');
const http = require('http');
const fetch = require('node-fetch');
const { JSDOM } = require('jsdom');

const app = express();

/* EXPESS CONFIG */
app.use(express.json());
app.use(cors());

/* ROUTE CONFIG */
app.post('/title', async (req, res) => {
  const url = req.body.url;
  try {
    const title = await getTitle(url);
    res.send({title});
  } catch (err) {
    res.status(500).send({
      message: err
    });
  }
});

/* SETUP HTTP SERVER */
var port = process.env.PORT || 5000;
app.set('port', port);

var server = http.createServer(app);

server.listen(port);

/* UTILITY FUNCTIONS */

// Find the title of a website at a given url
async function getTitle(url) {
  try{
    const formattedUrl = formatUrl(url);
    const data = await fetch(formattedUrl);
    const html = await data.text();
    const dom = new JSDOM(html);
    const title = dom.window.document.title;
    return title
  } catch (err) {
    throw new Error(err);
  }
}

// Add http:// to url if it is missing. This allows fetch to work on the url
function formatUrl(url) {
  if(url.startsWith("http://") || url.startsWith("https://")){
    return url;
  }

  return "http://" + url;
}