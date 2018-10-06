import React, { Component } from "react";

class Presupuesto extends Component {
  revisarPresupuesto(presupuesto, restante) {
    let clase;

    if (presupuesto / 4 > restante) {
      clase = "alert alert-danger";
    } else if (presupuesto / 2 > restante) {
      clase = "alert alert-warning";
    } else {
      clase = "alert alert alert-success";
    }
    return clase;
  }

  render() {
    const { presupuesto, restante } = this.props;
    return (
      <React.Fragment>
        <div className="alert alert-primary">Presupuesto: ${presupuesto}</div>
        <div className={this.revisarPresupuesto(presupuesto, restante)}>
          Restante: ${restante}
        </div>
      </React.Fragment>
    );
  }
}

export default Presupuesto;
