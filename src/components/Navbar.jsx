import React, { useState } from "react";
// import { Link } from "react-router-dom";

function Navbar(props) {
  // const [newBtn, setNewBtn] = useState({
  //   color: "",
  
  // });

  function handleClick(){
    document.body.style.backgroundColor = "red";
  }

  function handleClick1(){
    document.body.style.backgroundColor = "blue";
  }

  function handleClick2(){
    document.body.style.backgroundColor = "yellow";
  }

  function handleClick3(){
    document.body.style.backgroundColor = "green";
  }
  
  return (
    <>
      <div>
        <nav className="navbar md:navbar-expand bg-1" style={props.mode}>
          <div className="container-fluid">
            {/* <Link className="navbar-brand" to="/" style={props.mode}> */}
            <a className="navbar-brand" href="/" style={props.mode}>
              {props.title}
            </a>
            <button
              className="btn-icon navbar-toggler"
              type="button"
              data-bs-toggle="drawer"
              data-bs-target="#navbarDrawer"
              aria-controls="navbarDrawer"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" aria-hidden="true"></span>
            </button>
            <dialog
              className="drawer drawer-end"
              tabIndex="-1"
              id="navbarDrawer"
              aria-labelledby="navbarDrawerLabel"
            >
              <div className="drawer-body mb-2 md:mb-0">
                <ul className="nav navbar-nav me-auto">
                  <li className="nav-item">
                    {/* <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                      style={props.mode}
                    >
                      {props.home}
                    </Link> */}
                     <a
                      className="nav-link active"
                      aria-current="page"
                      href="/"
                      style={props.mode}
                    >
                      {props.home}
                    </a>
                  </li>
                  <li className="nav-item">
                    {/* <Link className="nav-link" to="/about" style={props.mode}>
                      {props.about}
                    </Link> */}
                      <a className="nav-link" href="/about" style={props.mode}>
                      {props.about}
                    </a>
                  </li>
                </ul>

                <button className="btn-solid theme-danger " onClick={handleClick}></button>
                <button type="button" className="btn-solid theme-primary" onClick={handleClick1}></button>
                <button type="button" className="btn-solid theme-warning" onClick={handleClick2}></button>
                <button type="button" className="btn-solid theme-success" onClick={handleClick3}></button>
                <div className="form-field">
                  <div className="switch">
                    <input
                      type="checkbox"
                      value=""
                      id="switchMdLabel"
                      role="switch"
                      onClick={props.clickToggleMode}
                    />
                  </div>
                  <label htmlFor="switchMdLabel" style={props.mode}>
                    {" "}
                    {props.mode.color === "black"
                      ? "Enable Dark Mode"
                      : "Enable Light Mode"}
                  </label>
                </div>
              </div>
            </dialog>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
