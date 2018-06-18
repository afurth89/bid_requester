let express = require('express');
let app = express();
let axios = require('axios');

const AUCTION_API_ROOT = "http://srx.pubcdn.net/auc.php"

// console.log("\n\n@@@@ STARTING...");

// process.argv.forEach(function (val, index, array) {
//   console.log(index + ': ' + val);
// });

let count = process.argv[2]
let totalBids = [];

for(let i = 1; i <= count; i++) {
  console.log(`\n@@@ Request ${i}`)
  requestBids()
}


function requestBids() {
  let url = `${AUCTION_API_ROOT}?${String(Date.now())}`
  console.log("@@@@ url", url);
  
  axios.get(url)
    .then(response => {
      let bids = response.data
      console.log("\n\n\n Bids",bids.length)
      totalBids = totalBids.concat(bids)
      console.log("\n\n\n\n ******* totalBids", totalBids.length)
    })
    .catch(error => {
      console.log(error);
    }); 
}





app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
