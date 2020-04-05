const express = require ('express');
const app = express();
const morgan = require ('morgan');
const bodyParser = require ('body-parser');
const cokieParser = require ('cookie-parser');
const path = require ('path');

const db = require('./database/db-config');

const index = require('./routes/index');

//app.use(morgan('tiny'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true })); // html Submit
app.use(bodyParser.json());
app.use(cokieParser());

app.use(express.static(path.resolve(__dirname, 'public')));
//app.use(express.static(`${_dirname}/public`));
//app.use('/api', Index);
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });


db.sync({ force: false }).then(con => {
  console.log(
  `${con.options.dialect} database ${con.config.database} connected at ${con.config.host}:${con.config.port}`
  );
    app.listen(3001, () => console.log('SERVER LISTENING AT PORT 3001'));
  });




