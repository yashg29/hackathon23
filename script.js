// Fetch data for Bitcoin
fetch('https://api.coingecko.com/api/v3/coins/bitcoin')  
.then(response => response.json())
.then(data => {
    const price = data.market_data.current_price.usd;
    const mcap = data.market_data.market_cap.usd;
    const pChange24h = data.market_data.price_change_percentage_24h;
    const volumeB=data.market_data.total_volume.usd;
    document.getElementById("btcprice").innerHTML = "$"+price;
    document.getElementById("btcmcap").append (" $"+mcap);
    document.getElementById("btcpc24H").append(" "+pChange24h+" %")
    document.getElementById("btcvol").append(" $"+volumeB);
  })
  .catch(error => {
    console.error(error);
  });

// Fetch data for Ethereum
fetch('https://api.coingecko.com/api/v3/coins/ethereum')
  .then(response => response.json())
  .then(data => {
    const price = data.market_data.current_price.usd;
    const mcap = data.market_data.market_cap.usd;
    const pChange24h = data.market_data.price_change_percentage_24h;
    const volumeB=data.market_data.total_volume.usd;
    document.getElementById("ethprice").innerHTML = "$"+price;
    document.getElementById("ethmcap").append (" $"+mcap);
    document.getElementById("ethpc24H").append(" "+pChange24h+" %")
    document.getElementById("ethvol").append(" $"+volumeB);
  })
  .catch(error => {
    console.error(error);
  });

// Fetch data for Binance Coin
fetch('https://api.coingecko.com/api/v3/coins/binancecoin')
  .then(response => response.json())
  .then(data => {
    const price = data.market_data.current_price.usd;
    const mcap = data.market_data.market_cap.usd;
    const pChange24h = data.market_data.price_change_percentage_24h;
    const volumeB=data.market_data.total_volume.usd;
    document.getElementById("bnbprice").innerHTML = "$"+price;
    document.getElementById("bnbmcap").append (" $"+mcap);
    document.getElementById("bnbpc24H").append(" "+pChange24h+" %")
    document.getElementById("bnbvol").append(" $"+volumeB);
  })
  .catch(error => {
    console.error(error);
  });

  // Fetch data for XRP
fetch('https://api.coingecko.com/api/v3/coins/ripple')
.then(response => response.json())
.then(data => {
  const price = data.market_data.current_price.usd;
  const mcap = data.market_data.market_cap.usd;
  const pChange24h = data.market_data.price_change_percentage_24h;
  const volumeB=data.market_data.total_volume.usd;
  document.getElementById("xrpprice").innerHTML = "$"+price;
  document.getElementById("xrpmcap").append (" $"+mcap);
  document.getElementById("xrppc24H").append(" "+pChange24h+" %")
  document.getElementById("xrpvol").append(" $"+volumeB);
})
.catch(error => {
  console.error(error);
});

// Fetch data for Cardano
fetch('https://api.coingecko.com/api/v3/coins/cardano')
  .then(response => response.json())
  .then(data => {
    const price = data.market_data.current_price.usd;
    const mcap = data.market_data.market_cap.usd;
    const pChange24h = data.market_data.price_change_percentage_24h;
    const volumeB=data.market_data.total_volume.usd;
    document.getElementById("adaprice").innerHTML = "$"+price;
    document.getElementById("adamcap").append (" $"+mcap);
    document.getElementById("adapc24H").append(" "+pChange24h+" %")
    document.getElementById("adavol").append(" $"+volumeB);
  })
  .catch(error => {
    console.error(error);
  });

  // Fetch data for OKB
fetch('https://api.coingecko.com/api/v3/coins/okb')
.then(response => response.json())
.then(data => {
  const price = data.market_data.current_price.usd;
  const mcap = data.market_data.market_cap.usd;
  const pChange24h = data.market_data.price_change_percentage_24h;
  const volumeB=data.market_data.total_volume.usd;
  document.getElementById("okbprice").innerHTML = "$"+price;
  document.getElementById("okbmcap").append (" $"+mcap);
  document.getElementById("okbpc24H").append(" "+pChange24h+" %")
  document.getElementById("okbvol").append(" $"+volumeB);
})
.catch(error => {
  console.error(error);
});

// Fetch data for Doge Coin
fetch('https://api.coingecko.com/api/v3/coins/dogecoin')
  .then(response => response.json())
  .then(data => {
    const price = data.market_data.current_price.usd;
    const mcap = data.market_data.market_cap.usd;
    const pChange24h = data.market_data.price_change_percentage_24h;
    const volumeB=data.market_data.total_volume.usd;
    document.getElementById("dogeprice").innerHTML = "$"+price;
    document.getElementById("dogemcap").append (" $"+mcap);
    document.getElementById("dogepc24H").append(" "+pChange24h+" %")
    document.getElementById("dogevol").append(" $"+volumeB);
  })
  .catch(error => {
    console.error(error);
  });

  // Fetch data for Matic
fetch('https://api.coingecko.com/api/v3/coins/matic-network')
.then(response => response.json())
.then(data => {
  const price = data.market_data.current_price.usd;
  const mcap = data.market_data.market_cap.usd;
  const pChange24h = data.market_data.price_change_percentage_24h;
  const volumeB=data.market_data.total_volume.usd;
  document.getElementById("maticprice").innerHTML = "$"+price;
  document.getElementById("maticmcap").append (" $"+mcap);
  document.getElementById("maticpc24H").append(" "+pChange24h+" %")
  document.getElementById("maticvol").append(" $"+volumeB);
})
.catch(error => {
  console.error(error);
});

// Fetch data for Binance Coin
fetch('https://api.coingecko.com/api/v3/coins/solana')
  .then(response => response.json())
  .then(data => {
    const price = data.market_data.current_price.usd;
    const mcap = data.market_data.market_cap.usd;
    const pChange24h = data.market_data.price_change_percentage_24h;
    const volumeB=data.market_data.total_volume.usd;
    document.getElementById("solprice").innerHTML = "$"+price;
    document.getElementById("solmcap").append (" $"+mcap);
    document.getElementById("solpc24H").append(" "+pChange24h+" %")
    document.getElementById("solvol").append(" $"+volumeB);
  })
  .catch(error => {
    console.error(error);
  });

  // Fetch data for Binance Coin
fetch('https://api.coingecko.com/api/v3/coins/polkadot')
.then(response => response.json())
.then(data => {
  const price = data.market_data.current_price.usd;
  const mcap = data.market_data.market_cap.usd;
  const pChange24h = data.market_data.price_change_percentage_24h;
  const volumeB=data.market_data.total_volume.usd;
  document.getElementById("dotprice").innerHTML = "$"+price;
  document.getElementById("dotmcap").append (" $"+mcap);
  document.getElementById("dotpc24H").append(" "+pChange24h+" %")
  document.getElementById("dotvol").append(" $"+volumeB);
})
.catch(error => {
  console.error(error);
});

// Fetch data for Binance Coin
fetch('https://api.coingecko.com/api/v3/coins/binancecoin')
  .then(response => response.json())
  .then(data => {
    const price = data.market_data.current_price.usd;
    const mcap = data.market_data.market_cap.usd;
    const pChange24h = data.market_data.price_change_percentage_24h;
    const volumeB=data.market_data.total_volume.usd;
    document.getElementById("bnbprice").innerHTML = "$"+price;
    document.getElementById("bnbmcap").append (" $"+mcap);
    document.getElementById("bnbpc24H").append(" "+pChange24h+" %")
    document.getElementById("bnbvol").append(" $"+volumeB);
  })
  .catch(error => {
    console.error(error);
  });

  // Fetch data for Binance Coin
fetch('https://api.coingecko.com/api/v3/coins/binancecoin')
.then(response => response.json())
.then(data => {
  const price = data.market_data.current_price.usd;
  const mcap = data.market_data.market_cap.usd;
  const pChange24h = data.market_data.price_change_percentage_24h;
  const volumeB=data.market_data.total_volume.usd;
  document.getElementById("bnbprice").innerHTML = "$"+price;
  document.getElementById("bnbmcap").append (" $"+mcap);
  document.getElementById("bnbpc24H").append(" "+pChange24h+" %")
  document.getElementById("bnbvol").append(" $"+volumeB);
})
.catch(error => {
  console.error(error);
});
