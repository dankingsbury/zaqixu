const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

// http://expressjs.com/en/starter/basic-routing.html
// app.get("/", (request, response) => {
//  response.sendFile(__dirname + '/views/index.html')
// })

app.get('/hello', (req, res) => {
	res.send('Hello World!');
});

// listen for requests :)
const listener = app.listen(port, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
});

