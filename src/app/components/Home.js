import React from "react";

export class Home extends React.Component {
  render() {
    var text = "In a new Component";
    return (
        <div>
          <p>{text}</p>
          <p>Hello, My name is {this.props.name}, your age is {this.props.age}</p>
          <p>My other name in the object is {this.props.user.name}</p>
          <div>
            <h4>Hobbies</h4>
              <ul>
                {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
              </ul>
          </div>
          <hr/>
          {this.props.children}
        </div>
    );
  }
}

Home.propTypes = {
  name: React.PropTypes.string,
  age: React.PropTypes.number,
  user: React.PropTypes.object,
  children: React.PropTypes.element.isRequired
};
