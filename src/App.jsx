import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Body from './components/Body';
import Navbar from './components/Navbar';
import Restaurants from './components/Restaurants';
import Restaurant from './components/Restaurant';

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="restaurants" element={<Restaurants />} />
          <Route path="restaurants/:restaurant_id" element={<Restaurant />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
