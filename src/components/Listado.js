import React, { Component } from "react";
import Gasto from "./Gasto";
class Listado extends Component {
  render() {
    return (
      <div className="gastos-realizados">
        <h2>Listado</h2>
        {Array.from(this.props.gastos).map(key => (
          <Gasto key={key} name={key.name} count={key.count} />
        ))}
      </div>
    );
  }
}

export default Listado;
