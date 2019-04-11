// import express from 'express';
const express = require('express')

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send({ hi: 'there'});
})


//https://pacific-springs-10248.herokuapp.com/ | https://git.heroku.com/pacific-springs-10248.git

app.listen(PORT, () => console.log(`Listening on ${PORT}`));