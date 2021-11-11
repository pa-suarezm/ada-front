import { Link } from 'react-router-dom';
import './AppHeader.css';

function AppHeader() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/home">
        <span
          className="navbar-brand"
        >
          <img src="https://uploads-ssl.webflow.com/5ef9e7820240534a394d4b30/5ef9e81e0240532d0b4d4cd6_LOGOEXPORT3-01(1200x600)TRANS-01.png" alt="" />
        </span>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to="/home">
            <span
              className="nav-item nav-link"
            >
              Inicio
            </span>
          </Link>
          <Link to="/projects">
            <span
              className="nav-item nav-link"
            >
              Proyectos
            </span>
          </Link>
          <Link to="/auth">
            <span
              className="nav-item nav-link"
            >
              Inicia sesión
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default AppHeader;