'use strict';

// libraries
require('dotenv').config();
const express = require('express'); // server
const app = express();

// local files
const notFoundHandler = require('./handlers/404');
const errorHandler = require('./handlers/500');

//routes
app.get('/',(req,res) => {
    res.send('Hello World :)');
});

app.get('/data', (req, res) => {
    res.status(200).json({
      name: 'Dunia alkilany',
      age: 24 ,
    email:'duniaalkilany908@gmail.com'
    });
  });
  

// app.get('/bad',(req,res) => {
//     throw new Error('something went wrong');
// });

app.post('/bad', (req,res)=> {
    let number = 12;
    number.forEach(x=> console.log(x));
    res.send('this Bad Route ');
})

// Handlers ==> Middleware
app.use('*', notFoundHandler);

// whenever someone throws an error, use the function errorHandler
// app.use(errorHandler);



// turning server on
function start(port) {
  app.listen(port, () => console.log(`server is listening on ${port}`));
}

module.exports = {
  app: app,
  start: start

}

