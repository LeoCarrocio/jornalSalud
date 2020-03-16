const express = require ('express');
const app = express();
const morgan = require ('morgan');
const bodyParser = require ('body-parser');
const cokieParser = require ('cookie-parser');
const path = require ('path');

const Index = require('./routes/index');

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

app.listen(3001, () => console.log('SERVER LISTENING AT PORT 3001'));


