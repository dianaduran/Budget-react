import React, { Component } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Listado from "./components/Listado";
import Presupuesto from "./components/PresupuestoControl";
import "./css/App.css";

class App extends Component {
  state = {
    gastos: {},
    presupuesto: "",
    restante: ""
  };

  componentDidMount() {
    this.getPresupuesto();
  }

  getPresupuesto = () => {
    let temp = prompt("Please, enter your budget");
    var presupuesto = parseInt(temp);

    if (presupuesto <= 0) this.getPresupuesto();
    else {
      this.setState({ presupuesto: presupuesto, restante: presupuesto });
    }
  };

  agregarGasto = gasto => {
    this.setState(previousState => ({
      gastos: [...previousState.gastos, gasto]
    }));

    //get the restate in state
    let newRestante = this.state.restante;

    newRestante -= gasto.count;

    this.setState({ restante: newRestante });

    this.getArray();
  };

  getArray = () => {
    console.log(this.state.gastos);
  };

  render() {
    return (
      <div className="App container">
        <Header title="Week Bill" />
        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column">
              <Form agregarGasto={this.agregarGasto} />
            </div>
            <div className="one-half column">
              <Listado gastos={this.state.gastos} />
              <Presupuesto
                presupuesto={this.state.presupuesto}
                restante={this.state.restante}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
