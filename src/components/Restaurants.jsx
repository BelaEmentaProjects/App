import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default function Restaurants() {
  const data = useSelector((state) => state.restaurants);

  const ShowRestaurants = () => {
    return (
      <>
        {Array.isArray(data) &&
          data.map((restaurant) => {
            const location_id = restaurant.location_id;
            const photo = restaurant.photo?.images;

            return (
              <Fragment key={location_id}>
                <div className="col-md-3">
                  {/* Restaurants Cards */}
                  <div className="card text-center" key={location_id}>
                    <NavLink to={`/restaurants/${location_id}`}>
                      <img
                        src={photo?.small?.url || photo?.medium?.url}
                        className="card-img-top"
                        alt={`${restaurant.name}'s restaurant`}
                      />
                    </NavLink>

                    <div className="card-body">
                      <h5 className="card-title fw-bold ">{restaurant.name}</h5>
                      <p className="card-text">
                        {restaurant.is_closed ? 'Aberto' : 'Fechado'}
                      </p>
                      <p className="card-text fw-bold">
                        {restaurant.raw_ranking}
                        <i className="fa fa-star"></i>
                      </p>
                      <NavLink to={`/restaurants/${location_id}`}>
                        <button className="btn btn-warning me-2" type="submit">
                          Ver mais
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </Fragment>
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
            <h1 className="display-6 fw-bolder text-center">Restaurantes</h1>
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
