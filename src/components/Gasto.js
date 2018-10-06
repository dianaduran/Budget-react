import React, { Component } from "react";

class Gasto extends Component {
  render() {
    return (
      <li className="gastos">
        <p>
          {this.props.name}
          <span className="gasto">${this.props.count}</span>
        </p>
      </li>
    );
  }
}

export default Gasto;
