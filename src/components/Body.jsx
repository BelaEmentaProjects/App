import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Restaurants from './Restaurants';
import axios from 'axios';
import { updateRestaurants } from '../store';

export default function Body() {
  const dispatch = useDispatch();

  useEffect(() => {
    (async function () {
      try {
        axios.get('assets/rapidAPIexample.json').then((response) => {
          // Dispatch the transformed data to Redux Store
          dispatch(updateRestaurants(response.data));
          console.log(
            '🚀 ~ file: Body.jsx:16 ~ axios.get ~ response.data:',
            response.data,
          );
        });
      } catch (error) {
        console.log('Error fetching data: ', error);
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
