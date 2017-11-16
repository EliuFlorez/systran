const express = require('express')
const app = express()
var appRoutes = require('./Routes/routes');

app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT ,DELETE');

      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

      next();
    });
app.use('/', appRoutes);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
