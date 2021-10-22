import React from 'react'
import Stockrow from './Stockrow';

const Stocklist = props => {
  
  
  if (props.yo.length === 0) {
    return (
      <tr >
        <h2>No Rows</h2>
      </tr>
    );
  }

  // console.log("inem chek", props.items)
  return (
    props.yo.map(coin =>
      <Stockrow
        key={coin.id}
        name={coin.name}
        price={coin.current_price}
        symbol={coin.symbol}
        marketcap={coin.total_volume}
        volume={coin.market_cap}
        image={coin.image}
        priceChange={coin.price_change_percentage_24h} addtofav = {props.addtofav} />
    )
  );
}

export default Stocklist;
