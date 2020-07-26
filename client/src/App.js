import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Navbar />
        <Wrapper>
          <Switch>
            {/* <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/portfolio" component={Portfolio} /> */}
            // <Route component={Search} />
          </Switch>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}


export default App;


