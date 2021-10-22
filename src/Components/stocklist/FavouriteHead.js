import React from 'react';
import Stockrow from './Stockrow';

const FavouriteHead = props => {
    

  return (

   props.items.map( head =>
      <th> {head} </th>
     )

  );
}

export default FavouriteHead;