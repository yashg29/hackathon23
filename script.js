// Fetch data for Bitcoin
fetch('https://api.coingecko.com/api/v3/coins/bitcoin')  
.then(response => response.json())
.then(data => {
    const price = data.market_data.current_price.usd;
    document.getElementById("btcprice").innerHTML = "$"+price;
  })
  .catch(error => {
    console.error(error);
  });

// Fetch data for Ethereum
fetch('https://api.coingecko.com/api/v3/coins/ethereum')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });

// Fetch data for Cardano
fetch('https://api.coingecko.com/api/v3/coins/cardano')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
