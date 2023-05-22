'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World - this is git-jenkins connected - it will run after edit');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
