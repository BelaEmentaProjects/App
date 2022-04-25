import React, { Fragment } from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default function Restaurants() {

    const data = useSelector(state => state.restaurants);

    const ShowRestaurants = () => {
        return (
            <>
                {data.map((restaurant) => {
                    const key = restaurant.place_id;
                    return (
                        <Fragment key={key}>
                            <div className="col-md-3">
                                {/* Restaurants Cards */}
                                <div className="card text-center" key={key}>
                                    <NavLink to={`/restaurants/${restaurant.place_id}`}>
                                        <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${restaurant.photos[0].photo_reference}&key=AIzaSyAFYvOo3Bg5Uy3zB0NPP-ibAhCMMYy7P2c`}
                                            className="card-img-top" alt={`${restaurant.name}'s restaurant`} />
                                    </NavLink>

                                    <div className="card-body">
                                        <h5 className="card-title fw-bold ">{restaurant.name}</h5>
                                        <p className="card-text">{restaurant.opening_hours.open_now ? 'Aberto' : 'Fechado'}</p>
                                        <p className="card-text fw-bold">{restaurant.rating}<i className="fa fa-star"></i>
                                        </p>
                                        <NavLink to={`/restaurants/${restaurant.place_id}`}>
                                            <button className="btn btn-warning me-2" type="submit">Ver mais</button>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                    )
                })
                }
            </>
        )
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
    )
}