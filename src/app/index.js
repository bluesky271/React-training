import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      homeLink: "Home"
    };
  }

  onGreet() {
    alert("Hello");
  }

  onChangeLinkName(newName) {
      this.setState({
        homeLink: newName
      });
  }

  render() {
    var user = {
      name: "Ngou Long",
      hobbies: ["Sports", "coding"]
    };
    return (
      <div className="container">
            <Header homeLink={this.state.homeLink} signInLink="Sign in"/>

        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home
            name={"kam"}
            initialAge={24}
            user={user}
            greet={this.onGreet}
            changeLink={(newName) => this.onChangeLinkName(newName)}
            initialLinkName={this.state.homeLink}>
              <p>this is a children nested under the Home</p>
            </Home>
          </div>
        </div>

      </div>
    );
  }
}

render(<App/>, window.document.getElementById("app"));
