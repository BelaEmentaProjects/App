import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function Restaurant() {

    const { place_id } = useParams();
    const data = useSelector(state => state.restaurants);

    /* Like button */
    const [like, setLike] = useState(false);
    let liked = like ? "btn-warning" : "";
    const handleLike = () => {
        setLike(!like);
    }

    const ShowRestaurant = () => (
        <>
            {data.filter(restaurant => (restaurant.place_id === place_id)).map((restaurant) => {
                const key = restaurant.place_id;
                return (
                    <Fragment key={key}>
                        <div className="col-md-6">
                            <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${restaurant.photos[0].photo_reference}&key=AIzaSyAFYvOo3Bg5Uy3zB0NPP-ibAhCMMYy7P2c`} alt={`${restaurant.name}'s restaurant`} height="400px" width="400px" />
                        </div>
                        {/* Restaurants name */}
                        <div className="col-md-4">
                            <h1 className="display-5">
                                {restaurant.name}
                            </h1>
                            {/* Restaurants address */}
                            <h4 className="text-uppercase text-black-50">
                                {restaurant.vicinity}
                            </h4>
                            {/* Restaurants rating */}
                            <p className="lead fw-bolder">
                                Classificação {restaurant.rating}
                                <i className="fa fa-star"></i>
                            </p>
                            <h3 className="display-6 fw-bold my-4">
                                {restaurant.opening_hours.open_now ? 'Aberto' : 'Fechado'}
                            </h3>
                            {/* Restaurants type badges */}
                            {restaurant.types.map((type) => {
                                return (
                                    <>
                                        <span className="badge rounded-pill bg-dark me-2">{type}</span>
                                    </>
                                )
                            })}
                        </div>
                        <div className="col-sm-2 py-2">
                            <button className={`btn btn-outline-dark me-2 ${liked}`} onClick={() => handleLike()}>
                                <i className="fa fa-heart"></i>
                            </button>
                        </div>
                    </Fragment>
                )
            })}
        </>
    )

    return (
        <div>
            <div className="container py-5">
                <div className="row py-4">
                    <ShowRestaurant />
                </div>
            </div>
        </div >
    )
}