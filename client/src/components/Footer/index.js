import React from "react";
// import "./style.css";

function Footer() {
  return (
    <div className="container pl-0 pr-0">
      <footer
        className="footer py-4  text-white-50"
        style={{ backgroundColor: "slategray" }}
      >
        <div className="container text-center">
          <div className="row row-cols-1 row-cols-md-3">
            <div className="col">
              <address>
                Phone: 856-465-3345
                <br />
                Email:{" "}
                <a
                  href="mailto:parsons.adamj@gmail.com"
                  className="text-white-50"
                >
                  parsons.adamj@gmail.com
                </a>
              </address>
            </div>
            <div className="col">
              <p>
                <a
                  href="https://github.com/ravalash"
                  rel="noopener noreferrer"
                  className="text-white-50"
                  target="_blank"
                >
                  Github Profile
                </a>
                <br />
                <a
                  href="https://www.linkedin.com/in/parsonsadamj"
                  rel="noopener noreferrer"
                  className="text-white-50"
                  target="_blank"
                >
                  LinkedIn Profile
                </a>
              </p>
            </div>
            <div className="col">
              <p>
                {/* <a href={Pdf} className="text-white-50" target="_blank" rel="noopener noreferrer">
                  Resume
                </a> */}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
