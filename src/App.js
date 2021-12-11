import { Route } from 'react-router-dom';

// components
import Header from './layouts/Header/Header';
import Home from './pages/Home/Home';
import CellPlaces from './pages/CellPlaces/CellPlaces';

// styles
import './App.scss';

function App() {
  return (
    <>
      <Header/>
      <main>
        <Route path="/home/:id">
          <CellPlaces/>
        </Route>
        <Route exact path="/home">
          <Home/>
        </Route>
      </main>
    </>
  );
}

export default App;
