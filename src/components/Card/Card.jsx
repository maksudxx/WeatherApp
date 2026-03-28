import React from 'react';
import './Card.css';
import {Link} from 'react-router-dom';

export default function Card ({min, max, name, img, onClose, id}) {
    return (
      <div className="card">
        <div id="closeIcon">
            <button onClick={onClose} className="btn-danger">X</button>
        </div>
        <Link to={`/ciudad/${id}`} className='link'>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <div className="weather-info">
              <div className="temp-group">
                <span className="temp-label">Min</span>
                <span className="temp-value">{min}°</span>
              </div>
              <div className="temp-group">
                <span className="temp-label">Max</span>
                <span className="temp-value">{max}°</span>
              </div>
              <div>
                <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="Icono Clima" />
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
};
