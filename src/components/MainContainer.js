import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [ stocks, setStocks ] = useState([])
  const [ myStocks, setMyStocks ] = useState([])
  const [ sortBy, setSortBy ] = useState("Alphabetically")
  const [ filterBy, setfilterBy ] = useState("Tech")

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then((response) => response.json())
    .then((stocks) => {
      setStocks(stocks)
    })
  }, [])

  useEffect(() => {
    fetch('http://localhost:3001/myStocks')
    .then((response) => response.json())
    .then((myStocks) => {
      setMyStocks(myStocks)
    })
  }, [])

  const sortedStocks = [...stocks].sort((a, b) =>{
    if(sortBy === 'Alphabetically') {
      return a.name.localeCompare(b.name)
    } else {
      return a.price - b.price
    }
  })

  const filteredStocks = sortedStocks.filter( (stock) => stock.type === filterBy )

  function handleBuyStock(boughtStock) {
    setMyStocks([...myStocks, boughtStock])
  }

  function handleSale(deletedStock) {
    const updatedStocks = myStocks.filter((stock) => stock.id !== deletedStock.id)
    setMyStocks(updatedStocks)
  }

  function handleSort(event) {
    setSortBy(event.target.value)
  }

  function handleFilter(event) {
    setfilterBy(event.target.value)
  }

  return (
    <div>
      <SearchBar sortBy={sortBy} handleSort={handleSort} filterBy={filterBy} handleFilter={handleFilter}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filteredStocks} onBuy={handleBuyStock}/>
        </div>
        <div className="col-4">
          <PortfolioContainer myStocks={myStocks} onSale={handleSale}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
