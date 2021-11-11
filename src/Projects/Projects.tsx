import React, {Component} from 'react';
import './Projects.css';

export default class Projects extends Component<{}, { projects: any, DataIsLoaded: boolean }> {
  
  constructor(props: any) {
    super(props);

    this.state = {
      projects: [],
      DataIsLoaded: false
    };
  }

  componentDidMount() {
    fetch("https://fervent-hopper-82cf2a.netlify.app/api/project/getAll").then(
      (res: any) => res.json()
    ).then(
      (json: any) => {
        this.setState(
          {
            projects: json,
            DataIsLoaded: true
          }
        );
        console.log(this.state);
      }
    );
  }

  render() {
    if (!this.state.DataIsLoaded) {
      return (
        <div className="row">
          <div className="col-12 text-center">
            <h1>
              Cargando proyectos...
            </h1>
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="row">
          {this.state.projects.map((e: any, i: number) => {
            return(
              <div className="col-3" key={i}>
                <div className="card">
                  <p>{e.toString()}</p>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  }
}