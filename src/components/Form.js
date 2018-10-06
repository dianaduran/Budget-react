import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    cant: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  crearGasto = e => {
    e.preventDefault();

    const gasto = {
      name: this.state.name,
      count: this.state.cant
    };

    // console.log(gasto);

    this.props.agregarGasto(gasto);

    this.setState({
      name: "",
      cant: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.crearGasto}>
        <h2>Agrega tus gastos aqui</h2>
        <div className="campo">
          <label>Name Spending</label>
          <input
            value={this.state.name}
            name="name"
            onChange={this.handleInputChange}
            className="u-full-width"
            type="text"
            placeholder="Ej. Transporte"
          />
        </div>

        <div className="campo">
          <label>Count</label>
          <input
            value={this.state.cant}
            name="cant"
            onChange={this.handleInputChange}
            className="u-full-width"
            type="text"
            placeholder="Ej. 300"
          />
        </div>

        <input
          className="button-primary u-full-width"
          type="submit"
          value="Agregar"
        />
      </form>
    );
  }
}

export default Form;
