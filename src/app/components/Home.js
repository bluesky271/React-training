import React from "react";

export class Home extends React.Component {

  constructor(props) {
    super();
    this.state = {
      age: props.initialAge,
      status: 0
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
          <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older</button>
        </div>
    );
  }
}

Home.propTypes = {
  name: React.PropTypes.string,
  initialAge: React.PropTypes.number,
  user: React.PropTypes.object,
  children: React.PropTypes.element.isRequired
};
