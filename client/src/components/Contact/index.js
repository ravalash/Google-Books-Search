import React from "react";
import BGImg from "../../assets/leather_1.png"

function Contact() {
  return (
    <div
      className="container"
      style={{ backgroundColor: "blanchedalmond", minHeight: "100vh" }}
    >
      <div className="row">
        {/* <!-- column keeps text to left below large breakpoint --> */}
        <div className="col-lg-9">
          {/* <!-- left margin keeps content aligned below large breakpoint --> */}
          <div
            className="card mt-3 ml-lg-5"
            style = {{backgroundImage: "url("+ BGImg + ")"}}
          >
            <div className="card-body">
              <h2 className="card-title display-4 text-muted">Contact</h2>

              <form>
                {/* <!-- input capture of user name --> */}
                <div className="form-group">
                  <label for="nameInput">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nameInput"
                    placeholder="John Smith"
                  />
                </div>

                <div className="form-group">
                  {/* <!-- input capture of user e-mail --> */}
                  <label for="emailInput">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailInput"
                    placeholder="name@example.com"
                  />
                </div>

                <div className="form-group">
                  {/* <!-- input capture of user message  --> */}
                  <label for="messageInput">Message</label>
                  <textarea
                    className="form-control"
                    id="messageInput"
                    placeholder="Dear Adam..."
                    rows="6"
                  ></textarea>
                </div>
                {/* <!-- button non function with java --> */}
                <button className="btn btn-secondary" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

