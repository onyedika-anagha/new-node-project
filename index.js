const express = require("express");
const app = express();

app.use(express.json())
app.use(express.urlencoded(extended,false))

app.use('api/users', require('./routes/api/users'))

var server = app.listen(8081, () => {
  var host = server.address().address,
    port = server.address().port;

  console.log("Example app listening at ", host, port);
});
