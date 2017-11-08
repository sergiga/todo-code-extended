const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 8081;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, 'dist/index.html'));
});

app.listen(port, () => {
  console.log('Application listening on port ' + port);
});