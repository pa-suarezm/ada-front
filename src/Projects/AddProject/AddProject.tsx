import React, {Component} from "react";
import './AddProject.css';

type Project = {
  user: string,
  type: string,
  name: string,
  date_delivery: string,
  status: string,
  description: string
}

export default class AddProject extends Component<{}, Project> {
  
  constructor(props: any) {
    super(props);
  }

  selectTypeADMIN() {
    this.setState({
      type: 'ADMIN'
    })
  }

  selectTypeWEB() {
    this.setState({
      type: 'WEB'
    })
  }

  selectTypeMOVIL() {
    this.setState({
      type: 'MOVIL'
    })
  }

  render() {
    return(
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-12">
              <h1>
                Registrar proyecto
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <label>
                Tipo
              </label>
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Selecciona el tipo de proyecto
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <button className="dropdown-item" type="button" onClick={this.selectTypeADMIN}>Panel administrador</button>
                  <button className="dropdown-item" type="button" onClick={this.selectTypeWEB}>Sitio Web</button>
                  <button className="dropdown-item" type="button" onClick={this.selectTypeMOVIL}>Aplicación móvil</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}