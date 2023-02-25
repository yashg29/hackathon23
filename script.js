fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
  .then(response => response.json())
  .then(data => {
    const prices= data.map(crypto => crypto.current_price)
    const image = data.map(crypto => crypto.image)
    console.log(prices);
    console.log(image)
  })
  .catch(error => {
    console.error(error);
  });