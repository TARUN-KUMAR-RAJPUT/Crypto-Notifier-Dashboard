import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import FavouriteHead from "./FavouriteHead";
import FavouriteHeadlist from "./FavouriteHeadlist";
import './Modal.css';
import './tableFav.css';

const Modal = props => {

  var ROWS = props.yo;
  // console.log(ROWS, "modal wala ");

  const headersFav = ["name",
  "symbol",
  "price",
  "marketcap",
  "volume",
  "image",
  "priceChange"]


  const closeOnEscapeKeyDown = e => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return ReactDOM.createPortal(

    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >


      <div className="modal" onClick={props.onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">{props.title}</h4>
          </div>


          <div className="modal-body">
            {props.children}

            <table id = "tableFav">
              <tr> 
                < FavouriteHead items={headersFav} />
              </tr>
              <FavouriteHeadlist yo1={ROWS} /> 
            </table>

            <h1>Mid</h1>
          </div>


          <div className="modal-footer">
            <div><h1>Bottom</h1></div>
            <button onClick={props.onClose} className="button">
              Close
          </button>

          
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")

  );
};

export default Modal;
