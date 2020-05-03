import dotenv from 'dotenv';
import express from 'express';
import Caver from 'caver-js';
import restAPI from './src/rest_endpoints';
import cors from 'cors';

dotenv.config();
const start_time = new Date().getTime();

const app = express();
app.use(cors());

const port = process.env.PORT;

const rest_stats = new restAPI(app, start_time);

app.listen(port, err =>{
  if (err) {
    return console.error(err);
  }

  return console.log(`Listening on ${port}`);
})
