import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLoading } from './store/client';

// components
import Header from './layouts/Header/Header';
import Home from './pages/Home/Home';
import Tickets from './pages/Tickets/Tickets';
import CellPlaces from './pages/CellPlaces/CellPlaces';
import Buy from './pages/Buy/Buy';
import Loader from './components/Loader/Loader';

// styles
import './App.scss';
import Footer from './layouts/Footer/Footer';

function App() {
  const isLoading = useSelector(selectLoading);
  return (
    <>
      {isLoading ? <Loader/> : null}
      <Header/>
      <main>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/tickets/buy/:cellId/:id/:price">
          <Buy/>
        </Route>
        <Route exact path="/tickets/:id">
          <CellPlaces/>
        </Route>
        <Route exact path="/tickets">
          <Tickets/>
        </Route>
      </main>
      {/* eslint-disable-next-line */}
      <a id='contacts'/>
      <Footer/>
    </>
  );
}

export default App;
