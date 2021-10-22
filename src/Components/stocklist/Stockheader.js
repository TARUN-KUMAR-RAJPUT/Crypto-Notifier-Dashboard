import React from 'react';

const Stockheader = props => {
    

  return (

   props.items.map( head =>
      <th> {head} </th>
     )

  );
}

export default Stockheader;