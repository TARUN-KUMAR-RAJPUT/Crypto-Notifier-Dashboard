import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const FavouriteHeadRows = props => {


  return (
    <tr >    <td> {props.name}</td>
      <td>  <img src={props.image} width="50px" /> <FontAwesomeIcon icon={faPlusCircle} /> </td>
      <td> {props.price}</td>
      <td> {props.symbol}</td>  
      <td> {props.marketcap}</td>
      <td> {props.volume}</td>
      <td> {props.priceChange}</td>
    </tr >

  )
}

export default FavouriteHeadRows;