import React from "react";
import BGImg from "../../assets/leather_1.png"
import ProfileImg from "../../assets/profile picture.jpg"
function About() {
  return (
      <div
        className="container"
        style={{ backgroundColor: "blanchedalmond", minHeight: "100vh" }}
      >
        <div className="row">
          {/* <!-- column keeps text to left below large breakpoint --> */}
          <div className="col-lg-9">
            {/* <!-- left margin below large breakpoint for alignment --> */}
            <div
              className="card mt-3 ml-lg-5"
              style={{ backgroundImage: "url("+ BGImg + ")", width:'100%', height:'100%' }}
            >
              <div className="card-body">
                <h2 className="card-title display-4 text-muted ml-5 ml-md-0">
                  About Me
                </h2>
                {/* <!-- image floated for text wrapping --> */}
                <img
                  src={ProfileImg}
                  alt="Profile of Adam Parsons"
                  className="img-fluid float-md-left ml-5 ml-md-2 mr-md-2 mb-4 mb-lg-0"
                  style={{ maxWidth: "300px" }}
                />
                <p className="ml-2">
                  Hello, and welcome! My name is Adam Parsons and I am an
                  aspiring web developer living in Philadelphia Pennsylvania.
                  I've always been fascinatated by anything having to do with
                  technology, and after a lifetime of coding as a hobby I've
                  decided to take the plunge and embrace it as my future
                  profession. In any job I've worked, I've been the guy you
                  could ask about how to write an Excel formula, set up a VPN,
                  or troubleshoot a router so I'm enjoying being the person to
                  know the least and learn the most for once.
                </p>
                <p className="ml-2">
                  In my spare time, my favorite thing to do is travel. In the
                  last few years I've been to several countries including Italy,
                  Spain, and Mexico. When I'm staying grounded, I'm often
                  camping across the United States, exploring enviroments from
                  beaches to nature trails with my wife and son. I love to read
                  anything from comics to novels and my perfect activity for a
                  rainy day is nothing more than watching a great movie with
                  friends and a bowl of popcorn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
}

export default About;
