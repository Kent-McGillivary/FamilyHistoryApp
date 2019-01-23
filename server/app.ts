import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as dotenvExpand from 'dotenv-expand';
import * as express from 'express';
import * as morgan from 'morgan';// For logs on server side
import * as mongoose from 'mongoose';
import * as path from 'path';

import setRoutes from './routes';

console.log('Start Server!');

const app = express();
app.set('port', (process.env.PORT || 3000));


app.use('/', express.static(path.join(__dirname, '../public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'));

dotenv.load({ path: '.env' });
const myEnv = dotenv.config();
const expand = dotenvExpand(myEnv);

const processEnv = JSON.stringify(process.env);

console.log('MongoDB Url:' + process.env.MONGODBURI);

mongoose.Promise = global.Promise;

let promise = mongoose.connect(process.env.MONGODBURI,{ useNewUrlParser: true });

promise.then(function(db:any) {
  console.log('Connected to MongoDB');
  setRoutes(app);

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });

  app.listen(app.get('port'), () => {
    console.log('Angular 2 Full Stack listening on port ' + app.get('port'));
  });
})
.catch((err) => {
  console.error(err);
});

export { app };
