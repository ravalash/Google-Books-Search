import React from "react";
import { Link } from "react-router-dom";
// import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (

    <header className="sticky-top">
        {/* <!--Container is used to allow link elements justified to end  --> */}
        <div className="container" style={{backgroundColor: 'slategray'}}>
            {/* <!-- expand above small break point. left padding removed for content alignment --> */}
            <nav className="navbar navbar-expand-sm navbar-dark pl-0  h-100">
                {/* <!-- left margin expanded to align content --> */}
                <Link className=" navbar-brand ml-5  " to="/#" style={{backgroundColor: 'darkgrey'}}>Adam
                    Parsons</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* <!-- link elements justified to end of container --> */}
                <div className="collapse navbar-collapse justify-content-md-end" id="navbarNav">
                    <ul className="navbar-nav ">
                    
                        <li className={window.location.pathname === "/about" ? "nav-item active" : "nav-item"}>
                            <Link className="nav-link" to="/about">About<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className={window.location.pathname === "/portfolio" ? "nav-item active" : "nav-item"}>
                            <Link className="nav-link" to="/portfolio">Portfolio</Link>
                        </li>
                        <li className={window.location.pathname === "/contact" ? "nav-item active" : "nav-item"}>
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>

  );
}

export default Navbar;
