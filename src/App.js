import React, { Component } from "react";

// Components
import SignIn from "./pages/account/sign-in-sign-up.component";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <SignIn />
      </div>
    );
  }
}

export default App;
