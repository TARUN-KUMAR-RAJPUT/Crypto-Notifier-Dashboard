import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import Modal from './Modal';

const Stockrow = props => {

  const [icon, seticon] = useState(faPlusCircle)
  let item = {
    "name": props.name,
    "symbol": props.symbol,
    "price": props.price,
    "marketcap": props.marketcap,
    "volume": props.volume,
    "image": props.image,
    "priceChange": props.priceChange
  }
  const process = (e) => {
    props.addtofav(e)
    seticon(faMinusCircle == icon ? faPlusCircle : faMinusCircle)
  }


  return (


    <tr>    <td> {props.name}</td>
      <td>  <img src={props.image} width="50px" onClick={process} id={props.name} /> <FontAwesomeIcon icon={icon} /> </td>
      <td> {props.price}</td>
      <td> {props.symbol}</td>
      <td> {props.marketcap}</td>
      <td> {props.volume}</td>
      <td> {props.priceChange}</td>
    </tr >



  )
}

export default Stockrow;