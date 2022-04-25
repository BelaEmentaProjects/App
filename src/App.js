import { Route, Routes } from 'react-router-dom';
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
          <Route exact path="/" element={<Body />} />
          <Route exact path="/restaurants" element={<Restaurants />} />
          <Route exact path="/restaurants/:place_id" element={<Restaurant />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
