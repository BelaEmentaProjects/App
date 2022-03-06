document.addEventListener('DOMContentLoaded', init, false);

function init() {
   /* DB */
   fetch('./resources/js/data.json')
      .then(response => response.json())
      .then(data => {
         restaurants = data;
         showRestaurants(restaurants);

      })
      .catch(err => console.log(err, ' error catch'));


}

/* Google Maps API Key */
const key = "AIzaSyAFYvOo3Bg5Uy3zB0NPP-ibAhCMMYy7P2c";
const samplePhotoReference = "Aap_uEAaPwDIUsQwey7uRlyjBMtWzly8CV61BepH-IRSDU3lPUzzlilCTZYGJahQY79aJdGfw_NO9xH1F4fK2IrlcpGgN-q0pFszBEQBMxuCVzoWvQ2WceY1NkGYKsQZVOrKe0cVFOBZ_Un1uOBIJk9Pp-iJPGRrGT3zaxknz6H-0sjrZFMY";

/* ---Elements--- */
let card = document.getElementById('cards');

/* Filter Restaurants */
let nameFilter = document.getElementById('filterName');
let restaurantOpen = document.querySelector('input.restaurant-open');
let restaurantClosed = document.querySelector('input.restaurant-closed');
let filterRatingInput = document.getElementById('filter-rating');

/* Add Restaurant */
let formRestaurant = document.querySelector('form.form-restaurant');
let newRestaurantName = document.querySelector('input.new-restaurant-name');
let newRestaurantOpen = document.querySelector('input.new-restaurant-open');

/* Edit Restaurants */
let updateRestaurantBtn = document.getElementById('update-restaurant-btn');
let deleteRestaurantBtn = document.getElementById('delete-restaurant-btn');
let editRatingInput = document.querySelector('input.edit-rating');


/* ---Events--- */
/* Filter Restaurants */
nameFilter.addEventListener('input', filterEvents, false);
restaurantOpen.addEventListener('change', filterEvents, false);
restaurantClosed.addEventListener('change', filterEvents, false);
filterRatingInput.addEventListener('change', filterEvents, false)

/* Edit Restaurants */
card.addEventListener('click', cardEvents, false)
updateRestaurantBtn.addEventListener('click', updateRestaurant, false)

/* Add Restaurant */
formRestaurant.addEventListener('submit', newRestaurant, false);

let restaurants = [];
let updatedRestaurants = [];
let restaurantToUpdate = [];

function cardEvents(e) {
   if (e.target.id === 'edit-restaurant') {
      restaurantToUpdate = restaurants.filter(r => r.place_id == e.target.dataset.id)
      newRestaurantName.value = restaurantToUpdate[0].name;
      newRestaurantOpen.checked = restaurantToUpdate[0].opening_hours.open_now;
      editRatingInput.value = parseInt(restaurantToUpdate[0].rating);
   }
   if (e.target.id === 'delete-restaurant') {
      restaurantToUpdate = restaurants.filter(r => r.place_id !== e.target.dataset.id)
      showRestaurants(restaurantToUpdate);
   }
}

function updateRestaurant(e) {
   updatedRestaurants = restaurants.map(r => {
      if (r.place_id === restaurantToUpdate[0].place_id) {
         r.name = newRestaurantName.value;
         r.opening_hours.open_now = newRestaurantOpen.checked;
         r.rating = editRatingInput.value;
      } else {
         return r
      }
   })
   showRestaurants(restaurants)
   e.preventDefault();
}

function newRestaurant(e) {
   let id = new Date().getTime();
   let name = newRestaurantName.value;
   let open = newRestaurantOpen.checked;
   let rating = editRatingInput.value;
   let i = [{
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
      "icon_background_color": "#909CE1",
      "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/hotel_pinlet",
      "name": name,
      "opening_hours": {
         "open_now": open
      },
      "photos": [
         {
            "height": 608,
            "html_attributions": [
               "\u003ca href=\"https://maps.google.com/maps/contrib/112581335421444049471\"\u003eAmora Hotel\u003c/a\u003e"
            ],
            "photo_reference": samplePhotoReference,
            "width": 1080
         }
      ],
      "place_id": id,
      "price_level": 3,
      "rating": rating,
      "reference": "ChIJa51FEUGuEmsRIXRtDjLFQXM",
      "scope": "GOOGLE",
      "user_ratings_total": 1867,
   }]
   restaurants.unshift(i[0]);
   showRestaurants(restaurants);
   formRestaurant.reset();
   e.preventDefault();
}

function filterEvents(e) {
   e.preventDefault();
   if (e.target.id === 'restaurant-open') {
      filterOpenRestaurants(e.target.checked);
   }
   if (e.target.id === 'restaurant-closed') {
      filterClosedRestaurants(e.target.checked);
   }
   if (e.target.id === 'filterName') {
      let input = e.target.value;
      filterName(input);
   }
   if (e.target.id === 'filter-rating') {
      filterRating(e.target.value);
   }
   if (e.target.id === 'edit-rating') {
      editRatingInput(e.target.value);
   }
}

function filterRating(value) {
   updatedRestaurants = restaurants.filter(restaurant => {
      return parseInt(restaurant.rating, 10) <= value;
   })
   showRestaurants(updatedRestaurants)
}

function filterOpenRestaurants(checked) {
   if (checked === true) {
      updatedRestaurants = restaurants.filter(restaurant => restaurant.opening_hours.open_now === true);
      showRestaurants(updatedRestaurants);
   } else {
      showRestaurants(restaurants);
   }
}

function filterClosedRestaurants(checked) {
   if (checked === true) {
      updatedRestaurants = restaurants.filter(restaurant => restaurant.opening_hours.open_now === false);
      showRestaurants(updatedRestaurants);
   } else {
      showRestaurants(restaurants);
   }
}

function filterName(input) {
   let nameRestaurant = restaurants.filter(restaurant => restaurant.name.search(input) > -1);
   showRestaurants(nameRestaurant);
}

function showRestaurants(arrayRestaurants) {
   card.innerHTML = ''

   arrayRestaurants.map(restaurant => {
      card.innerHTML += `
         <div class="col">
            <div class="card shadow-sm w-100 bg-light border mx-auto">
            <a href="restaurant.html">
            <img src='https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${restaurant.photos[0].photo_reference}&key=${key}'
                  class="img-fluid rounded float-start img-responsive" alt="Melita's restaurant">
            </a>
   
            <div class="card-body">
               <div class="d-flex justify-content-between align-items-center">
                  <a href="restaurant.html" class="text-decoration-none">
                        <medium class="text-muted">${restaurant.name}</medium>
                  </a>
                  <small class="text-muted">${restaurant.opening_hours.open_now ? 'Aberto' : 'Fechado'}</small>
                  <small class="text-muted">${restaurant.rating}</small>
                  <button class="btn btn-warning" id="edit-restaurant" data-id=${restaurant.place_id} type="submit">Editar</button>
                  <button class="btn btn-warning" id="delete-restaurant" data-id=${restaurant.place_id} type="submit">Apagar</button>
               </div>
            </div>
      </div>
     </div>`;
   })
}

