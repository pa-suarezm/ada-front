import { Link } from 'react-router-dom';
import './ProjectCard.css';

function ProjectCard(props: any) {
  return (
    <div className="col-3">
      <Link to={'/projects/' + props._id}>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-9">
                <h4>
                  {props.name}
                </h4>
              </div>
              <div className="col-3 text-right">
                <p>
                  {props.type}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                {props.status || 'En Proceso'}
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                Fecha de entrega: {props.date_delivery}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProjectCard;