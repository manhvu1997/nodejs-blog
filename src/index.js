const express = require('express');
const path = require('path');
const morgan = require('morgan');
const exphbs  = require('express-handlebars');
const route = require('./routes');
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname,'public')));
// Print data in post method
app.use(express.urlencoded({
  extended:true
}));
app.use(express.json());

// app.use(morgan('combined'))

// Template engine
app.engine('hbs', exphbs({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));
console.log(path.join(__dirname, 'resource/views'));

// Routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})