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
        axios.get('http://localhost:3002/restaurants').then((response) => {
          // Dispatch the transformed data to Redux Store
          dispatch(updateRestaurants(response.data.results.data));
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
    <>
      <div className="hero">
        <div className="card bg-dark text-white border-0">
          <img
            src="/assets/images/background.png"
            className="card-img"
            alt="Background"
            height="550px"
          />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <h5 className="card-title display-3 fw-border mb-0">
                Dishes near you
              </h5>
              <p className="card-text lead fs-2">
                Discover all the restaurants available in your area
              </p>
            </div>
          </div>
        </div>
        <Restaurants />
      </div>
    </>
  );
}
