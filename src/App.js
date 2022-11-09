import 'bootstrap/dist/css/bootstrap.min.css';
import ShowValues from "./components/statistics/ShowValues";
import React, { Fragment } from "react";
import ShopAssortment from './components/shop/ShopAssortment';
import ActivitiesList from './components/activities/ActivitiesList';
import './App.css'
function App() {
  return (
    <Fragment>
        <ShowValues />
        <main>
            <ActivitiesList />
            <ShopAssortment />
        </main>
    </Fragment>
  );
}

export default App;
