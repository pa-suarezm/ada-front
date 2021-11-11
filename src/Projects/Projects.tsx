import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import ProjectCard from './ProjectCard/ProjectCard';
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
        <Loading />
      );
    }
    else {
      return (
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-2">
                <div className="card">
                  <Link to="/project/create">
                    <div className="card-body">
                      <p>
                        <strong>
                          + Registrar proyecto
                        </strong>
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
                {this.state.projects.map((e: any, i: number) => {
                  return(
                    <ProjectCard
                      _id = {e._id}
                      status = {e.status}
                      user = {e.user}
                      type = {e.type}
                      name = {e.name}
                      date_delivery = {e.date_delivery}
                      description = {e.description}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      );
    }
  }
}