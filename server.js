const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(__dirname));
app.use(bodyParser());
app.use(bodyParser.urlencoded({extended: false}));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});
app.post('/message', (req, res) => {
});

app.listen(3000, () => {
  console.log('Server running');
});
