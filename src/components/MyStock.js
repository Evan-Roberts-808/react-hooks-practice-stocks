import React from "react";

function MyStock( { myStock, onSale } ) {

    function handleSale(){
        fetch(`http://localhost:3001/myStocks/${myStock.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then((deletedStock) => {
            onSale(deletedStock)
        })
    }

  return (
    <div>
      <div className="card" onClick={handleSale}>
        <div className="card-body">
          <h5 className="card-title">{myStock.name}</h5>
          <p className="card-text">{myStock.ticker}:{myStock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default MyStock;