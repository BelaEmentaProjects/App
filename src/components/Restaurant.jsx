import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useRestaurant } from '../hooks/useRestaurant';

export default function Restaurant() {
  const { id } = useParams();
  console.log('🚀 ~ file: Restaurant.jsx:7 ~ Restaurant ~ id:', id);
  const { restaurant, error } = useRestaurant(id);
  console.log(
    '🚀 ~ file: Restaurant.jsx:8 ~ Restaurant ~ restaurant:',
    restaurant,
  );
  // const location_id = restaurant.location_string;
  const photo = restaurant.photo?.images?.large;

  if (error) {
    return <div>Something went wrong...</div>;
  }

  if (!restaurant) {
    return <div>Loading...</div>;
  }

  /* Like button */
  // const [like, setLike] = useState(false);
  // let liked = like ? 'btn-warning' : '';
  // const handleLike = () => {
  //   setLike(!like);
  // };

  const ShowRestaurant = () => {
    return (
      <>
        <Fragment key={id}>
          <div className="col-md-6">
            <img
              src={photo?.medium?.url || photo?.large?.url}
              alt={`${restaurant.name}'s restaurant`}
              height="400px"
              width="400px"
            />
          </div>
          {/* Restaurants name */}
          <div className="col-md-4">
            <h1 className="display-5">{restaurant.name}</h1>
            {/* Restaurants address */}
            <h4 className="text-uppercase text-black-50">
              {restaurant.address}
            </h4>
            {/* Restaurants rating */}
            <p className="lead fw-bolder">
              Ranking {restaurant.raw_ranking}
              <i className="fa fa-star"></i>
            </p>
            <h3 className="display-6 fw-bold my-4">
              {restaurant.opening_hours.open_now ? 'Open' : 'Closed'}
            </h3>

            {/* Restaurants type badges */}
            <>
              <span className="badge rounded-pill bg-dark me-2">
                {restaurant.category.name}
              </span>
              <span className="badge rounded-pill bg-dark me-2">
                {restaurant.subcategory.name}
              </span>
            </>
          </div>
          {/* <div className="col-sm-2 py-2">
            <button
              className={`btn btn-outline-dark me-2 ${liked}`}
              onClick={() => handleLike()}
            >
              <i className="fa fa-heart"></i>
            </button>
          </div> */}
        </Fragment>
        );
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
          <ShowRestaurant />
        </div>
      </div>
    </div>
  );
}
