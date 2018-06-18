let express = require('express');
let app = express();

console.log("\n\n@@@@ STARTING...");

process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});