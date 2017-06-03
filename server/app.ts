import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as dotenvExpand from 'dotenv-expand';
import * as express from 'express';
import * as morgan from 'morgan';
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
var myEnv = dotenv.config();
var expand = dotenvExpand(myEnv);
var stringMyEnv = JSON.stringify(myEnv);
var expandMyEnv = JSON.stringify(expand);
var processEnv = JSON.stringify(process.env);

//console.log("MongoDBString:" + stringMyEnv);
//console.log("MongoDBExpand:" + expandMyEnv);
//console.log("MongoDB ProcessEnv:" + processEnv);
console.log("MongoDB Url:" + process.env.MONGODBURI);

mongoose.connect(process.env.MONGODBURI);
const db = mongoose.connection;
(<any>mongoose).Promise = global.Promise;

/*db.on('error', console.error.bind(console, 'connection error:'));*/
db.on('error',function(error){
  console.log("Error: " +JSON.stringify(error));
});
db.once('open', () => {
  console.log('Connected to MongoDB');

  setRoutes(app);

 app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

  app.listen(app.get('port'), () => {
    console.log('Angular 2 Full Stack listening on port ' + app.get('port'));
  });

});

export { app };