// eslint-disable-next-line import/no-extraneous-dependencies
import express from 'express';
import { DbConnection } from './db/connection.db';
import Routes from './routes';

// init Db connection
new DbConnection().conn.sync({
  alter: true,
})
  .then(() => console.log('db models synched'))
  .catch(err => console.error(`Something went bad with err => ${err}`));

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
new Routes(app);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
