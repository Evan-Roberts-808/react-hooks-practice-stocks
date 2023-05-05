import React from "react";
import MyStock from "./MyStock";

function PortfolioContainer({ myStocks, onSale }) {
  const myStockList = myStocks.map((myStock) => {
    return <MyStock key={myStock.id} myStock={myStock} onSale={onSale} />
  })
  return (
    <div>
      <h2>My Portfolio</h2>
      {myStockList}
    </div>
  );
}

export default PortfolioContainer;
