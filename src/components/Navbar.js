import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          <div
            className="bg-primary rounded button mx-2"
            onClick={()=>{props.toggle('primary')}}
            style={{ height: "30px", width: "30px" }}>
          </div>
          <div
              className="bg-secondary rounded button mx-2"
              onClick={()=>{props.toggle('secondary')}}
              style={{ height: "30px", width: "30px" }}>
          </div>
          <div
              className="bg-success rounded button mx-2"
              onClick={()=>{props.toggle('success')}}
              style={{ height: "30px", width: "30px" }}>
          </div>
          <div
              className="bg-danger rounded button mx-2"
              onClick={()=>{props.toggle('danger')}}
              style={{ height: "30px", width: "30px" }}>
          </div>
          <div
              className="bg-warning rounded button mx-2"
              onClick={()=>{props.toggle('warning')}}
              style={{ height: "30px", width: "30px" }}>
          </div>
          <div
              className="bg-info rounded button mx-2"
              onClick={()=>{props.toggle('info')}}
              style={{ height: "30px", width: "30px" }}>
          </div>
          <div className="form-check form-switch">
            <input
              onClick={props.toggle}
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label
              className={`form-check-label text-${props.modeText}`}
              htmlFor="flexSwitchCheckDefault"
            >
              Enable {props.toggleText} Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set Title Here",
  aboutText: "About Text",
};
