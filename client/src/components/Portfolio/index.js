import React from "react";
import Project from "../Project";
import BGImg from "../../assets/leather_1.png";
import pimg1 from "../../assets/workday.jpg";
import pimg2 from "../../assets/missmarymagic.jpg";
import pimg3 from "../../assets/triviagame.JPG";
import pimg4 from "../../assets/weatherdashboard.JPG";
import pimg5 from "../../assets/movieme.jpg";
import pimg6 from "../../assets/passwordgenerator.JPG";
import pimg7 from "../../assets/eatdaburger.jpg";
import pimg8 from "../../assets/globeplotter.jpg";

function Portfolio() {
  return (
    <div
      className="container"
      style={{
        backgroundColor: "blanchedalmond",
        minHeight: "100vh",
        fontFamily: "'Libre Baskerville', serif",
      }}
    >
      {/* <!-- grid is 3 rows of 2 columns above medium breakpoint --> */}
      <div className="row">
        <div className="col-lg-9">
          {/* <!-- left margin at large breakpoint to align content --> */}
          <div
            className="card mt-3 ml-lg-5"
            style={{ backgroundImage: "url(" + BGImg + ")" }}
          >
            <div className="card-body">
              <h2 className="card-title display-4 text-muted">Portfolio</h2>
              <div
                className="container"
                style={{ fontFamily: "'Libre Baskerville', serif" }}
              >
                <div className="row mt-3">
                  {/* <!-- columns collapse to single at medium breakpoint --> */}
                  <div className="col-md-6 pb-4">
                    <Project
                      title="Work Day Scheduler"
                      bg={pimg1}
                      repo="https://github.com/ravalash/Work-Day-Scheduler"
                      page="https://ravalash.github.io/Work-Day-Scheduler/"
                      description="A tool for scheduling your work day and tracking your appointments"
                    />
                  </div>

                  <div className="col-md-6 pb-4">
                    <Project
                      title="Miss Mary's Magical Mini Movie Machine"
                      bg={pimg2}
                      repo="https://github.com/ravalash/MarysMovieMachine"
                      page="https://ravalash.github.io/MarysMovieMachine/"
                      description="An application for teaching students social skills through distance learning"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 pb-4">
                    <Project
                      title="Trivia Game"
                      bg={pimg3}
                      repo="https://github.com/ravalash/Code-Quiz"
                      page="https://ravalash.github.io/Code-Quiz/"
                      description="A game that challenges users to answer a set of questions with time lost for each question answered wrong"
                    />
                  </div>

                  <div className="col-md-6 pb-4">
                    <Project
                      title="Weather Dashboard"
                      bg={pimg4}
                      repo="https://github.com/ravalash/WeatherDashboard"
                      page="https://ravalash.github.io/WeatherDashboard/"
                      description="A tool for checking current and future weather conditions for different cities and easy storage of frequent searches"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 pb-4">
                  <Project
                    title="MovieMe"
                    bg={pimg5}
                    repo="https://github.com/ravalash/MovieMe"
                    page="https://ravalash.github.io/MovieMe/"
                    description="A site designed to help movie lovers discover new content based on the films they already love"
                  />
                </div>

                <div className="col-md-6 pb-4">
                  <Project
                    title="Password Generator"
                    bg={pimg6}
                    repo="https://github.com/ravalash/Password-Generator"
                    page="https://ravalash.github.io/Password-Generator/"
                    description="A tool for generating random passwords with user defined parameters"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 pb-4">
                <Project
                    title="Eat-Da-Burger"
                    bg={pimg7}
                    repo="https://github.com/ravalash/Burger"
                    page="https://secret-fjord-48123.herokuapp.com/"
                    description="A restaurant site that lets users plan, eat, and delete burgers"
                  />
                </div>

                <div className="col-md-6 pb-4">
                <Project
                    title="Globe Plotter"
                    bg={pimg8}
                    repo="https://github.com/ravalash/Globe-Plotter"
                    page="http://theglobeplotter.com/"
                    description="A travel planning site to help people discover their next favorite memory"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
