import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Restaurants from './Restaurants';

export default function Body() {
  const dispatch = useDispatch();

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch('assets/data.json');
        const json = await response.json();
        dispatch({
          type: 'GET_RESTAURANTS',
          payload: json,
        });
      } catch (error) {
        console.log('ocorreu um erro');
      }
    })();
  });

  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="/assets/images/background.png"
          className="card-img"
          alt="Imagem de fundo"
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-border mb-0">
              Pratos perto de si
            </h5>
            <p className="card-text lead fs-2">
              Descubra todos os restaurantes
            </p>
          </div>
        </div>
      </div>
      <Restaurants />
    </div>
  );
}
