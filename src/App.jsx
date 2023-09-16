import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Body from './components/Body';
import Navbar from './components/Navbar';
import Restaurants from './components/Restaurants';
import RestaurantDetails from './components/RestaurantDetails';

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="restaurants" element={<Restaurants />} />
          <Route
            path="restaurant/:restaurant_id"
            element={<RestaurantDetails />}
          />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
