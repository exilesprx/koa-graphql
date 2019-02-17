require('dotenv').config();
const mongoose = require('mongoose');

const host = process.env.DB_HOST;
const database = process.env.DB_DATABASE;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

const connect = () => {

  mongoose.connect(
    `mongodb://${user}:${password}@${host}/${database}`,
    { useNewUrlParser: true }
  );

  mongoose.connection.once('open', () => {
    console.log('connected to database');
  });

}

module.exports = connect;