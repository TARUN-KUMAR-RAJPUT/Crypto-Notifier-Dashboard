import React , { useState } from 'react'
import FavouriteHeadRows from './FavouriteHeadRows';

const FavouriteHeadlist = props => {

  console.log(props.yo1, " yo1");

  if (props.yo1.length === 0) {

    return (
      <tr >
        <h2>No Rows</h2>
      </tr>
    );
  }

  // console.log("inem chek", props.items)
  return (
    props.yo1.map(coin =>
      <FavouriteHeadRows
        key={coin.id}
        name={coin.name}
        price={coin.current_price}
        symbol={coin.symbol}
        marketcap={coin.total_volume}
        volume={coin.market_cap}
        image={coin.image}
        priceChange={coin.price_change_percentage_24h} />
    )
  );
}

export default FavouriteHeadlist;