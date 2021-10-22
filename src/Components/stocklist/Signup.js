import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import './Modal.css';
import './Signup.css';


const Signup = props => {
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
      in={props.isShowsignup}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >

      {/* <div>
        <h1>Yoo</h1>
      </div> */}
      <div className="modal" onClick={props.onClose}>
        <div  onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <h4 className="modal-title">{props.title}</h4>
          </div>
          <div >{props.children}</div>
          <div className="modal-footer">



        <div className="login-form">
        <div className="form-box solid">
          <form>
            <h1 className="login-text">Sign Up Broo</h1>

            <label>First Name</label>
            <br></br>
            <input type="text" name="username" className="login-box" />
            <br></br>


            <label>Last Name</label>
            <br></br>
            <input type="text" name="username" className="login-box" />
            <br></br>




            <label>Email</label>
            <br></br>
            <input type="text" name="username" className="login-box" />
            <br></br>
            <label>Set Password</label>
            <br></br>
            <input type="password" name="password" className="login-box" />
            <br></br>
            <input type="submit" value="Signup" className="login-btn" />
          </form>
        </div>
      </div>
















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

export default Signup;
