import React, { useEffect, useState } from 'react';
import Stockheader from './Components/stocklist/Stockheader';
// import Stockheader from "./Components/stocklist/Stockheader"
import './table.css';
import './header.css';
import Stocklist from './Components/stocklist/Stocklist';
import Modal from './Components/stocklist/Modal';
import LoginForm from './Components/stocklist/LoginForm';
import Signup from './Components/stocklist/Signup';




const App = () => {
  const [crypto, setCrypto] = useState([]);
  const [search_txt, setSearch] = useState("");

  const headers = ["name",
    "symbol",
    "price",
    "marketcap",
    "volume",
    "image",
    "priceChange"]



  const getdata = async () => {
    try {
      const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false');
      const data = await res.json();

      console.log(data)
      setCrypto(data);

    } catch (error) {

    }
  }

  useEffect(() => {
    getdata();

    console.log("crypto", crypto);


  }, [])


  var ROWS = crypto

  const getInput = (e) => {
    setSearch(e.target.value)
  }
  ROWS = crypto.filter(c =>
    c.name.toLowerCase().includes(search_txt.toLowerCase()));


  const [show, setShow] = useState(false);

  const [isShowLogin, setIsShowLogin] = useState(false);

  const [isShowsignup, setIsShowsignup] = useState(false);


  const [fav, setFav] = useState([]);

  const addRow = (e) => {
    let already = fav.filter(c =>
      c.name == e.target.id)
    console.log(e.target.id)

    if (already.length === 0) {
      let item = crypto.filter(c => c.name == e.target.id);
      setFav(fav => fav.concat(item));
    }
    else {
      let items = fav.filter(c => c.name != e.target.id);
      setFav(items);

    }

  }



  return (

    <html className="bg">
      <body>

        <div class="topnav">

          <a href="/" class="">  <img src="BTC.png" width="25px" />CRYPTO</a>

          <a onClick={() => setShow(true)}>FAVOURITE</a>
          <Modal title="My Favourits Crypto.." onClose={() => setShow(false)} show={show} yo={fav} />


          <input type="text" placeholder="Broo.." onChange={getInput} />

          <a class="login" onClick={() => setIsShowLogin(true)}>LogIN</a>
          <LoginForm title="Sign UP" onClose={() => setIsShowLogin(false)} isShowLogin={isShowLogin} />

          <a class="signup" onClick={() => setIsShowsignup(true)}>SignUP</a>
          <Signup title="Sign UP" onClose={() => setIsShowsignup(false)} isShowsignup={isShowsignup} />

        </div>

        <br />

        <table id="table">
          <tr>
            <Stockheader items={headers} />
          </tr>
          <Stocklist yo={ROWS} addtofav={addRow} />
        </table>

      </body>
    </html >

  );
}

export default App;
