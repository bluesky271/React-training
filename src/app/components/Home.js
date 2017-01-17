import React from "react";

export class Home extends React.Component {

  constructor(props) {
    super();
    this.state = {
      age: props.initialAge,
      status: 0,
      homeLink: props.initialLinkName
  };
  setTimeout(() => {
    this.setState({
      status: 1
    });
  }, 2000);
}

  onMakeOlder() {
    this.setState({
      age: this.state.age + 3
    });
  }

  onChangeLink() {
    this.props.changeLink(this.state.homeLink);
  }

  onHandleChange(event) {
    this.setState({
      homeLink: event.target.value
    });
  }

  render() {
    var text = "In a new Component";
    return (
        <div>
          <p>{text}</p>
          <p>Hello, My name is {this.props.name}, your age is {this.state.age}</p>
          <p>Status: {this.state.status}</p>
          <p>My other name in the object is {this.props.user.name}</p>
          <div>
            <h4>Hobbies</h4>
              <ul>
                {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
              </ul>
          </div>
          <hr/>
          {this.props.children}
          <hr/>
          <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older</button>
          <hr/>
          <button onClick={this.props.greet} className="btn btn-primary">Greet!!</button>
          <hr/>
          <input type="text" value={this.state.homeLink} onChange={(event) => this.onHandleChange(event)}/>
          <button onClick={() => this.onChangeLink()} className="btn btn-primary">Change Header Link</button>
        </div>
    );
  }
}

Home.propTypes = {
  name: React.PropTypes.string,
  initialAge: React.PropTypes.number,
  user: React.PropTypes.object,
  children: React.PropTypes.element.isRequired,
  greet: React.PropTypes.func,
  initialLinkName: React.PropTypes.string
};
