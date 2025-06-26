// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Ahoj z backendu na Renderu!');
});

app.listen(PORT, () => {
  console.log(`Server běží na portu ${PORT}`);
});
