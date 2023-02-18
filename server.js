require('dotenv').config();
let express = require('express');
let app = express();

// enable CORS so that API is remotely testable by FCC
let cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/whoami', (req, res) => {
  const ipAddress = req.ip
  const { "accept-language": language, "user-agent": software } = req.headers

  const data = {
    "ipaddress": ipAddress,
    language,
    software
  }

  res.json(data);
});

let listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
