let prices = [];
let btccount=1;
let ethcount=1;
let bnbcount=1;
let xrpcount=1;
let adacount=1;
let okbcount=1;
let dogecount=1;
let maticount=1;
let solcount=1;
let dotcount=1;
let shibcount=1;
let ltccount=1;

// Fetch data for Bitcoin
fetch('https://api.coingecko.com/api/v3/coins/bitcoin')  
.then(response => response.json())
.then(data => {
    const price = data.market_data.current_price.usd;
    prices.push(price);
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
    prices.push(price);
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
    prices.push(price);
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
  prices.push(price);
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
    prices.push(price);
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
  prices.push(price);
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
    prices.push(price);
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
  prices.push(price);
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
    prices.push(price);
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
  prices.push(price);
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
fetch('https://api.coingecko.com/api/v3/coins/shiba-inu')
  .then(response => response.json())
  .then(data => {
    const price = data.market_data.current_price.usd;
    prices.push(price);
    const mcap = data.market_data.market_cap.usd;
    const pChange24h = data.market_data.price_change_percentage_24h;
    const volumeB=data.market_data.total_volume.usd;
    document.getElementById("shibprice").innerHTML = "$"+price;
    document.getElementById("shibmcap").append (" $"+mcap);
    document.getElementById("shibpc24H").append(" "+pChange24h+" %")
    document.getElementById("shibvol").append(" $"+volumeB);
  })
  .catch(error => {
    console.error(error);
  });

  // Fetch data for Binance Coin
fetch('https://api.coingecko.com/api/v3/coins/litecoin')
.then(response => response.json())
.then(data => {
  const price = data.market_data.current_price.usd;
  prices.push(price);
  const mcap = data.market_data.market_cap.usd;
  const pChange24h = data.market_data.price_change_percentage_24h;
  const volumeB=data.market_data.total_volume.usd;
  document.getElementById("ltcprice").innerHTML = "$"+price;
  document.getElementById("ltcmcap").append (" $"+mcap);
  document.getElementById("ltcpc24H").append(" "+pChange24h+" %")
  document.getElementById("ltcvol").append(" $"+volumeB);
})
.catch(error => {
  console.error(error);
});



setTimeout(() => {

    //b2.addEventListener('click', () => PopUp());

    document.getElementById("btcpriceh").innerHTML = "$"+(btccount*prices[0]);
    document.getElementById("ethpriceh").innerHTML = "$"+(ethcount*prices[1]);
    document.getElementById("bnbpriceh").innerHTML = "$"+(bnbcount*prices[2]);
    document.getElementById("xrppriceh").innerHTML = "$"+(xrpcount*prices[3]);
    document.getElementById("adapriceh").innerHTML = "$"+(adacount*prices[4]);
    document.getElementById("okbpriceh").innerHTML = "$"+(okbcount*prices[5]);
    document.getElementById("dogepriceh").innerHTML = "$"+(dogecount*prices[6]);
    document.getElementById("maticpriceh").innerHTML = "$"+(maticount*prices[7]);
    document.getElementById("solpriceh").innerHTML = "$"+(solcount*prices[8]);
    document.getElementById("dotpriceh").innerHTML = "$"+(dotcount*prices[9]);
    document.getElementById("shibpriceh").innerHTML = "$"+(shibcount*prices[10]);
    document.getElementById("ltcpriceh").innerHTML = "$"+(ltccount*prices[11]);

  }, 3000);


  function PopUp(){
        // Create the prompt dialog box
        const dialogBox = document.createElement('div');
        dialogBox.classList.add('prompt-box');
    
        // Create the label
        const label = document.createElement('label');
        label.classList.add('prompt-label');
        label.textContent = 'Please enter your holdings:';
    
        // Create the input field
        const input = document.createElement('input');
        input.classList.add('prompt-input');
        input.type = 'text';
    
        // Create the OK button
        const okButton = document.createElement('button');
        okButton.textContent = 'OK';
        okButton.addEventListener('click', () => {
          // Get the value of the input field and do something with it
          const holdings = input.value;
          // ...
          // Remove the dialog box from the DOM
          document.body.removeChild(dialogBox);
        });
    
        // Create the Cancel button
        const cancelButton = document.createElement('button');
        cancelButton.textContent = 'Cancel';
        cancelButton.addEventListener('click', () => {
          // Remove the dialog box from the DOM
          document.body.removeChild(dialogBox);
        });
    
        // Add the label, input field, and buttons to the dialog box
        dialogBox.appendChild(label);
        dialogBox.appendChild(input);
        const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('prompt-buttons');
        buttonsContainer.appendChild(okButton);
        buttonsContainer.appendChild(cancelButton);
        dialogBox.appendChild(buttonsContainer);
    
        // Add the dialog box to the DOM
        document.body.appendChild(dialogBox);
    
        // Set the focus to the input field
        input.focus();
  }