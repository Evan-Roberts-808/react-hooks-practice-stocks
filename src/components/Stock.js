import React from "react";

function Stock( { stock, onBuy } ) {

  function handlePurchase() {
    fetch('http://localhost:3001/myStocks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'name': stock.name,
        'ticker': stock.ticker,
        'type': stock.type,
        'price': stock.price
      })
    })
    .then(response => response.json())
    .then((boughtStock) => {
      onBuy(boughtStock)
    })
  }

  return (
    <div>
      <div className="card" onClick={handlePurchase}>
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.ticker}:{stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
