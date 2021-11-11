import React, {Component} from "react";
import { useParams } from "react-router-dom";
import Loading from "../../Loading/Loading";
import './ProjectDetail.css';

type Project = {
  _id: string,
  status: string,
  user: string,
  type: string,
  name: string,
  date_delivery: string,
  description: string
}

function ProjectDetail() {
  const {_id} = useParams();
  const [loading, setLoading] = React.useState(() => true);
  const [project, setProject] = React.useState(() => {
    return {
      _id: '',
      status: '',
      user: '',
      type: '',
      name: '',
      date_delivery: '',
      description: ''
    };
  });

  React.useEffect(() => {
    setLoading(true);
    fetch("https://fervent-hopper-82cf2a.netlify.app/api/project/getAll").then(
      (res: any) => res.json()
    ).then(
      (json: any) => {
        for (let aux of json) {
          if (aux._id == _id) {
            setProject({
              _id: aux._id,
              status: aux.status,
              user: aux.user,
              type: aux.type,
              name: aux.name,
              date_delivery: aux.date_delivery,
              description: aux.description
            });
            console.log(project);
            break;
          }
        }
        setLoading(false);
      }
    );
  }, [_id]);

  return(
    loading ?
      <Loading />
      :
      (
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-12">
                <h1>
                  {project.name}
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h4>
                  {project.type}
                </h4>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h4>
                  {project.status || 'En Proceso'}
                </h4>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h4>
                  Fecha de entrega: {project.date_delivery}
                </h4>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h4>
                  Descripción
                </h4>
                <h5>
                  {project.description}
                </h5>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
              </div>
            </div>
            <div className="row">
              <div className="col-12">
              </div>
            </div>
          </div>
        </div>
      )
  );
}

export default ProjectDetail;