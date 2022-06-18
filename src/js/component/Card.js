import React from "react";
import PropTypes from "prop-types";

let cardStyle = {
  width: "20rem",
};

let imageStyle = {
  objectFit: "cover",
};

const Card = (props) => {
  return (
    <div
      className="card col-sm-12 col-md-6 col-lg-3 m-auto mb-sm-5"
      style={cardStyle}
    >
      <img
        src={props.imagen}
        className="card-img-top mt-2"
        style={imageStyle}
        alt="..."
      ></img>
      <div className="card-body">
        <h5 className="card-title">{props.titulo}</h5>
        <p className="card-text">{props.text}</p>
        <div className="row">
          <div className="col">
            <a href="#" className="btn btn-success">
              Read more of this story!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.PropTypes = {
  titulo: PropTypes.string,
  imagen: PropTypes.string,
  parrafo: PropTypes.string,
};

export default Card;
