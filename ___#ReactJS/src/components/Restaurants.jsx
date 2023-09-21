import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useRestaurants } from '../hooks/useRestaurants';

export default function Restaurants() {
  const data = useRestaurants();

  const ShowRestaurants = () => {
    return (
      <>
        {Array.isArray(data) &&
          data.map((restaurant) => {
            const photo = restaurant.photo?.images;
            const restaurant_id = restaurant.location_id;

            return (
              <div className="col-md-3" key={restaurant_id}>
                {/* Restaurants Cards */}
                <div className="card text-center">
                  <Link to={`/restaurant/${restaurant_id}`}>
                    <img
                      src={photo?.small?.url || photo?.medium?.url}
                      className="card-img-top"
                      alt={`${restaurant.name}'s restaurant`}
                    />
                  </Link>

                  <div className="card-body">
                    <h5 className="card-title fw-bold ">{restaurant.name}</h5>
                    <p className="card-text">
                      {restaurant.is_closed ? 'Open' : 'Closed'}
                    </p>
                    <p className="card-text fw-bold">
                      {restaurant.rating}
                      <i className="fa fa-star"></i>
                    </p>
                    <Link to={`/restaurant/${restaurant_id}`}>
                      <button className="btn btn-warning me-2" type="submit">
                        More info
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-6">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Restaurants</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          <ShowRestaurants />
        </div>
      </div>
    </div>
  );
}