import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onBuy }) {
  const stockList = stocks.map((stock) => {
    return <Stock key={stock.id} stock={stock} onBuy={onBuy}/>
  })
  return (
    <div>
      <h2>Stocks</h2>
      {stockList}
    </div>
  );
}

export default StockContainer;
